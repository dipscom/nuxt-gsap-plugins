export default {
  /*
  * Comment out to test SSR
  */
  target: 'static',
  head: {
    /*
    * Comment out if bundling GSAP with your project
    */
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/Draggable.min.js'
      }
    ]
  },
  css: [
    '~/assets/globals.css',
  ],
  build: {
    /*
    * Uncomment if bundling GSAP with your project and using SSR
    */
    // transpile: ['gsap']
  }
}