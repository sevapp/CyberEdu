<template>
	<div :class="$style.container">
		<div>

      <div class="box" :class="$style.form">
        <h3 class="subtitle">Форма обратной связи</h3>

        <div :class="$style.socials">
          <b-button type="is-info" @click="openLink('https://t.me/sevapp')">Telegram</b-button>
          <b-button type="is-primary">Discord</b-button>
        </div>

        <b-field>
          <b-input placeholder="Имя"
            type="search"
            icon="account"
            v-model="name"
            icon-clickable>
          </b-input>
        </b-field>

        <b-field>
          <b-input placeholder="Телефон"
            type="search"
            icon="phone"
            v-model="phone"
            icon-clickable>
          </b-input>
        </b-field>

        <b-button type="is-success" @click="sendData">Отправить</b-button>
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
    openLink(link) {
      window.location.href = link;
    },

		async sendData() {

			await this.$recaptcha.init();

			try {
				this.token = await this.$recaptcha.execute('login');
				console.log('ReCaptcha token:', this.token);

				let xhr = new XMLHttpRequest();
        let link =  `${process.env.BOT_URL}?name=${encodeURIComponent(this.name)}&phone=${encodeURIComponent(this.phone)}&token=${this.token}`;
        
				console.log(link);
				xhr.open("POST", link);
				xhr.send();

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
  width: 25rem;
  align-items: flex-start;
  text-align: left;
}

.socials {
  margin-bottom: 1rem;
}
</style>
