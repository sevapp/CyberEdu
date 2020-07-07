<template>
	<div :class="$style.container">
		<div>

      <div class="" :class="$style.form">
        <div :class="$style.socials">
          <b-button 
            type="is-info"
            size="is-large"
            icon-left="telegram"
            @click="openLink('https://t.me/sevapp')"
            label="Telegram"
          />

          <b-button 
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
            type="search"
            size="is-large"
            icon="emoticon-outline"
            v-model="name"
            icon-clickable>
          </b-input>
        </b-field>

        <b-field>
          <b-input placeholder="Телефон"
            type="search"
            size="is-large"
            icon="phone"
            v-model="phone"
            icon-clickable>
          </b-input>
        </b-field>

        <b-button 
          type="is-success"
          size="is-large"
          @click="sendData">
            Отправить
        </b-button>
      </div>
		</div>
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

.container {
	margin: 0 auto;
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.form {
  text-align: left;
}

.socials {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}
</style>
