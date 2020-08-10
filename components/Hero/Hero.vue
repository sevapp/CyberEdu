<template>
  <div :class="$style.section">
    <div class="columns" :class="$style.row">
      <div class="column is-6 is-offset-1">
        <Intro />
      </div>
      <div class="column is-3">
        <Form />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>

.section {
  min-height: 100vh;
  // max-height: 100vh;
  max-width: 100%;
  display: flex;
  // justify-content: center;
  align-items: center;
  // text-align: center;
  // flex-direction: row-reverse;

  @media (orientation: portrait) {
    // flex-direction: column-reverse;
    // min-height: inherit;
    min-height: inherit;
    max-height: inherit;
  }
}

.row {
  width: 100%;

  @media (orientation: portrait) {
    width: inherit;
  }
}

</style>
