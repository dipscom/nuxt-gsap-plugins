import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    /*
      If you do not have any particular reason to bundle
      GSAP in your project, you can easily add links to the
      various CDNs and enjoy all the benefits it brings
    */
    // script: [
    //   {
    //     src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js'
    //   },
    //   {
    //     src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/utils/Draggable.min.js'
    //   },
    // ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    /*
      If you do not want to use the UMD version of GSAP,
      you'll have to tell Babel to transpile the library and its plugins
      from ES modules.
      Bellow is how you would configure it.
    */
    // transpile: ['TweenMax', 'Draggable', 'ThrowPropsPlugin'],
  }
}
