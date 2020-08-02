<template>
  <div :class="$style.section">

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
  flex-direction: column;

  @media (orientation: portrait) {
    flex-direction: column-reverse;
    // min-height: inherit;
  }
  
  padding: 3rem;
}

.block {
  min-width: 65%;
  min-height: 10rem;
  display: flex;
  justify-content: space-between;
  // background-color: #fff;
  margin: 3rem 0 0 0;

  ._reverse {
    flex-direction: row-reverse;
  }
}

.illustartion {
  min-width: 20%;
  min-height: 100%;
  background-color: #fff;
}

.text {
  min-width: 70%;
  min-height: 100%;
  background-color: #fff;
}

</style>
