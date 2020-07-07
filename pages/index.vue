<template>
	<div :class="$style.container">

    <Form />

    <div class="" :class="$style.Title">
      <p>Сложный экзамен в вузе?</p>
		</div>
	</div>
</template>

<script>

export default {

	data() {
		return {
		};
	},

	mounted() {
	},

	methods: {
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
	flex-direction: row-reverse;

	@media (orientation: portrait) {
		flex-direction: column-reverse;
	}
}

.Title {
	// background-color: #f999;
	margin: 0 4rem 0 0;
	width: 40%;
	min-height: 23rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: left;
	font-size: 6rem;
	padding: 1rem;

	@media (orientation: portrait) {
		margin: 0 0 5rem 0;
		font-size: 4rem;
		min-width: 100%;
	}
}

</style>
