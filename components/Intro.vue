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
        'Сложный экзамен в вузе?',
        'Или хчешь сменить профессию?',
        'Интересуешься программированием, но не знаешь с чего начать?',
        'Все очень просто...',
        'Напиши нам в Telegram, Discord или оставь свой телефон)'
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
	// background-color: #f999;
	margin: 0 4rem 0 0;
	width: 40%;
	min-height: 23rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: left;
  font-size: 4rem;
  hyphens: auto;
	padding: 1rem;

	@media (orientation: portrait) {
		margin: 0 0 5rem 0;
		font-size: 3rem;
		min-width: 100%;
	}
}

</style>
