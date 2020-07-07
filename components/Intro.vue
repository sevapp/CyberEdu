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
        'Или хочешь <l>сменить</l> профессию?',
        '<l>Интересен</l> код, но не знаешь с чего <l>начать?</l>',
        '<l>Все</l> очень <l>просто...</l>',
        '<l>Напиши</l> нам в Telegram / WhatsApp или <l>оставь</l> свой телефон)'
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
  padding: 1rem;
	text-align: left;
  font-size: 4rem;
  hyphens: auto;
  color: #000000;
  // text-shadow:
  //   -1rem -1rem 0 #ffffff,
  //   1rem -1rem 0 #ffffff,
  //   -1rem 1rem 0 #ffffff,
  //   1rem 1rem 0 #ffffff;
  line-height: 1.3;
  user-select: none;
  // word-break: break-all;

	@media (orientation: portrait) {
		margin: 0 0 5rem 0;
		font-size: 3rem;
		min-width: 100%;
	}
}

</style>
