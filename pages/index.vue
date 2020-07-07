<template>
	<div :class="$style.container">

    <Form />

    <Intro />
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

</style>
