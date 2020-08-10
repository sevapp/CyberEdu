<template>
  <div :class="$style.content">
    <Footer />
    <Hero />
    <Tech />
    <HowTo />
  </div>
</template>

<style lang="scss" module>

.content {
  position: absolute;
  background: radial-gradient(circle, #cccccc 0.06em, #ffffff 0.052em);
  background-size: 2em 2em;
  background-repeat: repeat;
  max-width: 100%;
  overflow: hidden;
}

</style>