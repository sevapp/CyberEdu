<template>
  <div :class="$style.section">
    <div class="columns">
      <!-- <div class="column is-offset-1" :class="$style.logo">
        <img width="32px" src="~/static/favicons/icon.svg">
      </div> -->
      <div class="column is-offset-1" :class="$style.header">
        <img
          v-if="$device.isDesktopOrTablet"
          :class="$style.logo" 
          width="32px" 
          src="~/static/favicons/icon.svg">
        <div class="" :class="$style.Title">
          <samp :class="$style.box">
            <l>CyberEdu</l> - объединение преподавателей 
          </samp>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>

.section {
  position: fixed;
  z-index: 100;
  width: 100%;
  // min-height: 10vh;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  background: #666666;
}

.header {
  display: flex;

  @media (orientation: portrait) {
    margin: 0rem 1rem 0rem 1rem;
  }
}

.logo {
  margin-right: 1rem;

  @media (orientation: portrait) {
    display: none;
  }
}

.Title {
  font-size: 1.5rem;
  color: #ffffff;
  line-height: 1.1;
  user-select: none;

	@media (orientation: portrait) {
    font-size: 1rem;
    text-align: left;
	}
}

.box {
  font-family: 'Rubik Mono One', sans-serif;
  word-spacing: -10px;
  letter-spacing: 0px;
  @media (orientation: portrait) {
    word-spacing: -10px;
  }
}


</style>
