# GSAP Plugins in Nuxtjs

> A skeleton repo to help beginners setup GSAP&#39;s plugins in Nuxt

Fork this repository and use as a base or, better yet, read this summary then, install Nuxt normally as per [their documentation](https://nuxtjs.org/).

For this example I did not add any of the extras and have set it up as a Universal application rather than SPA. It should work equally well on either mode.

## Nuxt Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Adding GSAP and its Plugins

_Firstly it is worth mentioning that you **don't have to** add GSAP and most of its plugins to your application&#39;s bundle. It works just fine being pulled from a CDN, and it will probably already be cached in your visitor&#39;s browser due to GSAP&#39;s prevalence on the internet_.

<!-- The files the bellow examples touch are: `nuxt.config.js` and `index.vue`. -->

#### Add GSAP as an external CDN dependency

All you have to do is list the CDN urls in your `nuxt.config.js` file like the following:

``` javascript
export default {
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/utils/Draggable.min.js'
      },
    ]
  }
}
```

> [Nuxt documentation](https://nuxtjs.org/faq#global-settings) on adding global settings to your application.

Premium Plugins are treated differently. [See bellow](#premium-plugins).

#### To add GSAP to your project bundle
``` bash
$ npm install --save gsap
```

Then, `import` it in the relevant components. Here we are importing in the main `index.vue` file.

``` javascript
  import Logo from '~/components/Logo.vue'
  import TweenMax from 'gsap/umd/TweenMax'
  import Draggable from 'gsap/umd/Draggable'
```

GSAP, as of version 2.0 uses ES modules by default. Nuxt, on the other hand, uses CommonJS/UMD. Thankfully, GSAP also has a CommonJS/UMD version bundled under the `/umd` subfolder. Make sure your imports point to the `/umd` version of the library and you&#39;ll be good to go.

More detailed information on GSAP's NPM usage can be found in the [official docs](https://greensock.com/docs/NPMUsage).

#### Premium Plugins

Because of licensing, GSAP&#39;s premium plugins are not available via NPM, one has to log into their GreenSock account and download the bundle that contains the desired plugin.

Once in possession of said plugin, create a `assets/vendor` folder and copy it there. Then, it's just a matter of importing it in the relevant component normally.

``` javascript
  import Logo from '~/components/Logo.vue'
  import TweenMax from 'gsap/umd/TweenMax'
  import Draggable from 'gsap/umd/Draggable'
  import ThrowPropsPlugin from '~/assets/vendor/ThrowPropsPlugin'
```

#### A Note on using GSAP's ES6 modules

If, for whatever reason, you still think you should use GSAP&#39;s ES6 modules version, all that is required is to [transpile it during the build stage](https://nuxtjs.org/guide/plugins/#es6-plugins).

``` javascript
  build: {
    transpile: ['TweenMax', 'TimelineMax']
  }
}
```
