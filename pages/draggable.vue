<template>
  <main>
    <h1>Draggable example</h1>
    <div class="draggable">Drag me</div>
    <NuxtLink to="/">
      Home
    </NuxtLink>
  </main>
</template>

<script>
export default {
  mounted: function () {
    gsap.registerPlugin(Draggable)

    Draggable.create('.draggable')
  }
}
</script>

<style scoped>
  .draggable {
    background: white;
    border: 2px dashed black;
    padding: 1rem;
    text-align: center;
    font-weight: 600;
  }
</style>