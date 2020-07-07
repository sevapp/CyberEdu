<template>
  <div class="box" :class="$style.form">
    <div :class="$style.socials">
      <b-button
        :class="$style._button"
        type="is-info"
        size="is-large"
        icon-left="telegram"
        @click="openLink('https://t.me/cyberedu_xyz')"
        label="Telegram"
      />

      <b-button
        :class="$style._button"
        type="is-primary"
        size="is-large"
        icon-left="discord"
        disabled
        @click="openLink('https://t.me/sevapp')"
        label="Discord"
      />
    </div>

    <b-field>
      <b-input placeholder="Имя"
        size="is-large"
        icon="emoticon-outline"
        v-model="name"
        icon-clickable>
      </b-input>
    </b-field>

    <b-field>
      <b-input placeholder="Телефон"
        size="is-large"
        icon="phone"
        v-model="phone"
        icon-clickable>
      </b-input>
    </b-field>

    <b-button 
      type="is-success"
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
      name:   "Vsevolod",
      phone:  "+7999722858",
      token:  null,
    };
  },

  mounted() {
    // console.log(process.env.CAPCHA_PUB);
    // console.log(process.env.BOT_URL);
  },

  methods: {
    testPhone() {

    },

    testName() {

    },

    openLink(link) {
      window.location.href = link;
    },

    async sendData() {
      await this.$recaptcha.init();

      try {
        const token = await this.$recaptcha.execute('login');
        console.log('ReCaptcha token:', token);

        let xhr = new XMLHttpRequest();
        const link =  `${process.env.BOT_URL}?name=${encodeURIComponent(this.name)}&phone=${encodeURIComponent(this.phone)}&token=${token}`;
      
        console.log(link);
        xhr.open("POST", link);
        xhr.send();
      
        this.$buefy.notification.open({
          message: 'Отрпавлено!',
          type: 'is-success'
        });

      } catch (error) {
        console.log('Login error:', error);
      }
    }
  },
}
</script>

<style lang="scss" module>
.form {
  text-align: left;
}

.socials {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  ._button {
    width: 10.5rem;
  }
}
</style>
