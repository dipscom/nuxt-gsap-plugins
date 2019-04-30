<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-gsap-plugins
      </h1>
      <h2 class="subtitle">
        A skeleton repo to help beginners setup GSAP&#39;s plugins in Nuxt
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
/*
  Note that Nuxt currently does not support ES modules,
  so we need to use GSAP's UMD version of the library
*/
import TweenMax from 'gsap/umd/TweenMax'
import Draggable from 'gsap/umd/Draggable'
/*
If you have access the bonus plugins
place a copy of ThrowPropsPlugin
from the bonus-files-for-npm-users/umd
in the assets/vendor/folder then uncomment
the require bellow
*/
// import ThrowPropsPlugin from '~/assets/vendor/ThrowPropsPlugin'


export default {
  components: {
    Logo
  },

  mounted() {
    Draggable.create(
      ".VueToNuxtLogo",
      {
        // throwProps:true,
      }
    );
  },

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
