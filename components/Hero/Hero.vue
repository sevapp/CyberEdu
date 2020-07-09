<template>
	<div :class="$style.section">
    <Form />
    <Intro />
	</div>
</template>

<style lang="scss" module>

.section {
	margin: 0 auto;
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: row-reverse;
	background: radial-gradient(circle, #dddddd 0.06em, #ffffff 0.052em);
	background-size: 2em 2em;
  background-repeat: repeat;

	@media (orientation: portrait) {
		flex-direction: column-reverse;
		min-height: inherit;
	}
}

</style>
