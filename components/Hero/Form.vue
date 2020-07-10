<template>
  <div class="" :class="$style.Form">
    <div :class="$style.socials">
      <b-button
        :class="$style.button"
        type="is-info"
        size="is-large"
        icon-left="telegram"
        @click="openLink('https://t.me/cyberedu_xyz')"
      />

      <b-button
        :class="$style.button"
        type="is-success"
        size="is-large"
        icon-left="whatsapp"
        @click="openLink('https://wa.me/79999722858')"
      />

      <!-- <b-button
        :class="$style.button"
        type="is-primary"
        size="is-large"
        icon-left="discord"
        @click="openLink('https://discordapp.com/channels/@me/292653910684860417')"
      /> -->

      <!-- <b-button
        :class="$style.button"
        type="is-info"
        size="is-large"
        icon-left="vk"
        disabled
        @click="openLink('')"
      /> -->
    </div>

    <b-field
      :type="nameIsValid"
      message="Русскими буквами">
      <b-input
        placeholder="Имя"
        ref="iName"
        size="is-large"
        icon="emoticon-outline"
        v-model="name"
        @input="testName"
        icon-clickable>
      </b-input>
    </b-field>

    <b-field
      :type="phoneIsValid"
      message="В формате +7XXXXXXXXXX">
      <b-input 
        placeholder="Телефон"
        ref="iPhone"
        size="is-large"
        icon="phone"
        v-model="phone"
        @input="testPhone"
        icon-clickable>
      </b-input>
    </b-field>

    <div :class="$style.policy">
      Нажимая на кнопку «Отправить», вы даете согласие на обработку своих <nuxt-link to='/privacy'>персональных данных</nuxt-link>
    </div>

    <br>
    <b-button
      :class="$style.buttonSend"
      type="is-warning"
      size="is-large"
      @click="sendData"
      label="Отправить"
    />
  </div>
</template>

<script>

export default {
  data() {
    return {
      name:   '',
      nameIsValid: '',
      phone:  '',
      phoneIsValid: '',
      token:  null,
    };
  },

  methods: {
    testName(val) {
      const regex = /^[а-яА-Я]+$/;
      this.nameIsValid = this.name == '' ? '' :
        regex.test(val) && val.length >= 3 && val.length <= 15 ? 
          'is-success' : 
          'is-danger';
    },
    
    testPhone(val) {
      const regex = /^\+7\d{10}$/;
      this.phoneIsValid = this.phone == '' ? '' : 
        regex.test(val) ? 
          'is-success' : 
          'is-danger';
    },

    openLink(link) {
      window.location.href = link;
    },

    async sendData() {
      if (this.nameIsValid == 'is-success' && this.phoneIsValid == 'is-success') {
        await this.$recaptcha.init();

        try {
          const token = await this.$recaptcha.execute('login');

          let xhr = new XMLHttpRequest();
          const link =  `${
            process.env.BOT_URL
          }?name=${
            encodeURIComponent(this.name)
          }&phone=${
            encodeURIComponent(this.phone)
          }&token=${
            token
          }`;
        
          xhr.addEventListener("load", res => {
            if (xhr.status == 200 && JSON.parse(xhr.response).status == 'ok') {
              this.$buefy.dialog.alert({
                type: 'is-warning',
                message: '<h3 class="subtitle">Ожидайте звонка, большое вам спасибо!</h3>',
                confirmText: 'Ок'
              });

              this.name = '';
              this.phone = '';
              this.phoneIsValid = '';
              this.nameIsValid = '';

            } else {
              this.$buefy.notification.open({
                message: `Ошибка ${xhr.status}: ${xhr.statusText}`,
                type: 'is-danger',
                duration: 5000
              });
            }
          });

          xhr.open("POST", link);
          xhr.send();

        } catch (error) {
          this.$buefy.notification.open({
            message: `Ошибка: ${error}`,
            type: 'is-danger',
            duration: 5000
          });
        }
      }
    }
  },
}
</script>

<style lang="scss" module>
.container {
  // min-height: 100vh;
  display: flex;
  justify-content: center;

  ._mobile {
    min-height: auto;
  }
}

.Form {
  max-width: 25rem;
  padding: 1rem;
  text-align: left;
  background-color: #ffffff;
  // min-height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;

  @media (orientation: portrait) {
		min-width: 100%;
    background-color: #eeeeee;
	}
}

.policy {
  line-height: 1rem;
  color: #aaa;
  font-size: 0.75rem;
}

.socials {
  width: 100%;
  // display: flex;
  // justify-content: space-between;
  margin-bottom: 2rem;

  @media (orientation: portrait) {
		// text-align: right;
	}
}

.buttonSend {
  @media (orientation: portrait) {
		min-width: 100%;
	}
}
</style>