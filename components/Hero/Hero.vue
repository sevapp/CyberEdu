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

  @media (orientation: portrait) {
    flex-direction: column-reverse;
    min-height: inherit;
  }
}

</style>
