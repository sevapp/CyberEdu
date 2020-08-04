<template>
  <!-- <div :class="$style.section">
    <div class="" :class="$style.Title">
      <samp :class="$style.box">
        Что ты можешь изучить с нами?
      </samp>
    </div>
    <div :class="$style.text">
      <b-tag size="is-large">JavaScript</b-tag>
      <b-tag size="is-large">Canvas</b-tag>
      <b-tag size="is-large">Git</b-tag>
      <b-tag size="is-large">Lua</b-tag>
      <b-tag size="is-large">HTML</b-tag>
      <b-tag size="is-large">C</b-tag>
      <b-tag size="is-large">Make</b-tag>
      <b-tag size="is-large">Nodejs</b-tag>
      <b-tag size="is-large">Bash</b-tag>
      <b-tag size="is-large">CSS</b-tag>
      <b-tag size="is-large">C#</b-tag>
      <b-tag size="is-large">Bash</b-tag>
      <b-tag size="is-large">Vue / Nuxt</b-tag>
      <b-tag size="is-large">Python</b-tag>
      <b-tag size="is-large">WebGL</b-tag>
    </div>
  </div> -->
  <div :class="$style.section">
    <div class="columns">
      <div class="column is-three-fifths is-offset-1">
        <div class="" :class="$style.Title">
          <samp :class="$style.box">
            Что ты можешь изучить с нами?
          </samp>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-half is-offset-1">
        <div :class="$style.text">
          <b-tag size="is-large">JavaScript</b-tag>
          <b-tag size="is-large">Canvas</b-tag>
          <b-tag size="is-large">Git</b-tag>
          <b-tag size="is-large">Lua</b-tag>
          <b-tag size="is-large">HTML</b-tag>
          <b-tag size="is-large">C</b-tag>
          <b-tag size="is-large">Make</b-tag>
          <b-tag size="is-large">Nodejs</b-tag>
          <b-tag size="is-large">Bash</b-tag>
          <b-tag size="is-large">CSS</b-tag>
          <b-tag size="is-large">C#</b-tag>
          <b-tag size="is-large">Bash</b-tag>
          <b-tag size="is-large">Vue / Nuxt</b-tag>
          <b-tag size="is-large">Python</b-tag>
          <b-tag size="is-large">WebGL</b-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>

.section {
  // margin: 0 auto;
  // width: 100%;
  // // min-height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
  // flex-direction: column;

  // @media (orientation: portrait) {
  //   // flex-direction: column-reverse;
  //   // min-height: inherit;
  //   padding: 0;
  // }
  
  // padding: 3rem;
  padding-top: 5.5rem;
  padding-bottom: 5.5rem;
  background: #ffdd57;

  @media (orientation: portrait) {
    background: none;
  }
}

.Title {
	// margin: 0 4rem 0 0;
	// width: 40%;
	// min-height: 26rem;
	// display: flex;
	// justify-content: center;
  // align-items: center;
  // padding: 1rem;
	//text-align: left;
  font-size: 4.5rem;
  // hyphens: auto;
  color: #666666;
  // text-shadow:
  //   -1rem -1rem 0 #ffffff,
  //   1rem -1rem 0 #ffffff,
  //   -1rem 1rem 0 #ffffff,
  //   1rem 1rem 0 #ffffff;
  line-height: 1.1;
  user-select: none;
  // word-break: break-all;

	@media (orientation: portrait) {
		margin: 0rem 1rem 1rem 1rem;
    font-size: 2.6rem;
    text-align: left;
    // min-width: 100%;
    // min-height: 28rem;
    // text-align: center;
	}
}

.box {
  font-family: 'Rubik Mono One', sans-serif;
  word-spacing: -30px;
  letter-spacing: 0px;
  @media (orientation: portrait) {
    word-spacing: -15px;
  }
}

.text {
  margin: 1rem 1rem 1rem 1rem;
  font-size: 2.5rem;
  text-align: left;
}

</style>
