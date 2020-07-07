<template>
  <div class="" :class="$style.Title">
    <p v-html="text"></p>
  </div>
</template>

<script>

export default {

	data() {
		return {
      text: '',
      strings: [
        'Сложный <l>экзамен</l> в вузе?',
        'Или хчешь <l>сменить</l> профессию?',
        '<l>Интересен</l> код, но не знаешь с чего <l>начать?</l>',
        'Все очень <l>просто...</l>',
        '<l>Напиши</l> нам в Telegram, Discord или <l>оставь</l> свой телефон)'
      ]
		};
	},

	mounted() {
    this.text = this.strings[0];
    let i = 0;
    setInterval(() => {
      i ++;
      this.text = this.strings[i % this.strings.length];
    }, 3000);
	},

	methods: {

	},
}
</script>

<style lang="scss" module>
.Title {
	margin: 0 4rem 0 0;
	width: 40%;
	min-height: 23rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: left;
  font-size: 4rem;
  hyphens: auto;
  line-height: 1.3;
  // word-break: break-all;
	padding: 1rem;

	@media (orientation: portrait) {
		margin: 0 0 5rem 0;
		font-size: 3rem;
		min-width: 100%;
	}
}

</style>
