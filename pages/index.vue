<template>
  <div :class="$style.content">
    <Hero />
    <Tech />
    <HowTo />
    <Footer />
  </div>
</template>

<style lang="scss" module>

.content {
  background: radial-gradient(circle, #cccccc 0.06em, #ffffff 0.052em);
  background-size: 2em 2em;
  background-repeat: repeat;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}

</style>