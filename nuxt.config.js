export default {
  target: 'static',
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/Draggable.min.js'
      }
    ]
  },
  css: [
    '~/assets/globals.css',
  ],
}