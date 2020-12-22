<template>
  <main>
    <h1>Nuxt and Gsap</h1>
    <NuxtLink to="/draggable">
      Draggable example
    </NuxtLink>
  </main>
</template>

<script>
export default {
  mounted: function () {
    gsap.to('h1', {
      duration: 1,
      opacity: 0.25,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })
  }
}
</script>
