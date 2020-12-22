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
/*
* Uncomment if bundling GSAP with your project
*/
// import { gsap } from 'gsap'
// import { Draggable } from 'gsap/Draggable.js'

export default {
  mounted: function () {
    /*
    * Uncomment if bundling GSAP with your project
    */
    // gsap.registerPlugin(Draggable)

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