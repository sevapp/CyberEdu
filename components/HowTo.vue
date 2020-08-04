<template>
  <div :class="$style.section">
    <div class="columns">
      <div class="column is-three-fifths is-offset-1">
        <div class="" :class="$style.Title">
          <samp :class="$style.box">
            Как мы работаем?
          </samp>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-half is-offset-1">
        <div :class="$style.text">
          <ul>
            <li>
              <l>#</l> 
              Тут очень много какого-то текста Тут очень много какого-то текста Тут очень много какого-то текста
            </li>
            <br>
            <li>
              <l>#</l>
              Тут очень много какого-то текста Тут очень много какого-то текста Тут очень много какого-то текста
            </li>
            <br>
            <li>
              <l>#</l>
              Cats
            </li>
            <br>
            <li>
              <l>#</l>
              Cats
            </li>
            <br>
            <li>
              <l>#</l>
              Cats
            </li>
          </ul>
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
  
  padding-top: 5.5rem;
  padding-bottom: 5.5rem;

  background: none;

  @media (orientation: portrait) {
    background: #ffdd57;
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
  color: #666666;
  margin: 1rem 1rem 1rem 1rem;
  font-size: 2.5rem;
  text-align: left;
  font-family: 'Rubik Mono One', sans-serif;
  word-spacing: -10px;
  letter-spacing: 0px;

  @media (orientation: portrait) {
    font-size: 1.5rem;
  }
}

li {
  // background: #ffdd57;
  // padding: 1rem;
  border-radius: 4px;
  margin-left: -10px;
  line-height: 1.3;
  background: #fff;
  border: 5px solid #666666;
  padding: 1.5rem;
  // text-decoration: underline;

  @media (orientation: portrait) {
    padding: 1rem;
    margin-left: 0;
    border: none;
    // box-shadow: rgba(0, 0, 0, 0.1) 4px 4px;
    // text-shadow: rgba(0, 0, 0, 0.1) 4px 4px;
  }
}

</style>
