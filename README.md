> This was written for GSAP V2.

# GSAP & Plugins in Nuxt

> A skeleton repo to help setup GSAP&#39;s plugins in Nuxt

Fork this repository and use as a base or, better yet, read this summary then,
 install Nuxt normally as per [their documentation](https://nuxtjs.org/).

For this example I did not add any of the extras Nuxt offers and have set it up as a Universal application rather than SPA. It should work equally well on either mode.

## Nuxt build setup

In your command line terminal of choice, assuming you have all that is necessary to start developing with Nuxt.

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

> For detailed explanation on how things work, check the [Nuxt.js docs](https://nuxtjs.org).

## Adding GSAP and its plugins

Firstly it is worth mentioning that you **don&#39;t have to** add GSAP and its plugins to your application&#39;s bundle. It works just fine being pulled from a CDN, and it will probably already be cached in your visitor&#39;s browser due to GSAP&#39;s prevalence on the internet.

In its current form, GSAP is designed to work as a global attached to the `window` object. If you can have GSAP on a external script tag, it is recommended that you do so.

## GSAP as a global dependency

List the CDN urls in your `nuxt.config.js` file like the following and you are all set:

``` javascript
export default {
  head: {
    script: [
      {
        // 90% Of your needs will be covered by TweenMax
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js'
      },
      {
        // Non-premium plugins will all be available via CDN
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/utils/Draggable.min.js'
      },
    ]
  }
}
```

> See [Nuxt&#39;s documentation](https://nuxtjs.org/faq#global-settings) on adding global settings to your application.

### GSAP&#39;s premium plugins as globals

GSAP&#39;s premium plugins are not available via CDN links. They are available to Club GreenSock members under the &#39;Downloads&#39; section of their account profiles (_if you are not a club member, you can get more information [on this page](https://greensock.com/club/)_).

To add _members-only_ plugins to your Nuxt project, download them from your profile page and drop the chosen plugins into Nuxt&#39;s `static` folder. Then, you add a reference to them on your `script` section of your `nuxt.config.js` file.

> [Nuxt documentation](https://nuxtjs.org/guide/assets#static) on static assets.


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
      // Member-only plugins that exists in the ./static folder (NOT present in this repository)
      {
        src: '/ThrowPropsPlugin.min.js'
      },
      {
        src: '/GSDevTools.min.js'
      },
      {
        src: '/SplitText.min.js'
      },
    ]
  }
}
```

## GSAP in your project bundle

GSAP, as of version 2.0 uses ES modules by default. Nuxt, on the other hand, uses CommonJS/UMD. Thankfully, GSAP also has a CommonJS/UMD version bundled under the `/umd` subfolder.

> Full post of the 2.0 release with detailed info [on this link](https://greensock.com/2-0-0/).

Install GSAP as a dependency of your project using NPM or Yarn.

``` bash
$ npm install --save gsap
```

Then, `import` GSAP and its plugins in the relevant components. Bellow we are importing in the main `index.vue` file.

``` javascript
import Logo from '~/components/Logo.vue'
import TweenMax from 'gsap/umd/TweenMax'
import Draggable from 'gsap/umd/Draggable'
```

Make sure your imports point to the `/umd` version of the library.

> More detailed information on GSAP&#39;s NPM usage can be found in the [official docs](https://greensock.com/docs/NPMUsage).

### Bundling premium plugins

Because of licensing, GSAP&#39;s premium plugins are not available via NPM. You will have to log into your GreenSock account and download the zip file that contains the desired plugin.

The folder you will be looking for is `scr/bonus-files-for-npm-users/umd`. Note this is a differnt UMD folder than the previously mentioned UMD folder.

Once in possession of said plugins, create a `assets/vendor` folder (it can be any folder you want, actually) and copy them there. Then, it is just a matter of importing them in the relevant component.

``` javascript
import Logo from '~/components/Logo.vue'
import TweenMax from 'gsap/umd/TweenMax'
import Draggable from 'gsap/umd/Draggable'
import ThrowPropsPlugin from '~/assets/vendor/ThrowPropsPlugin'
```

#### Caveat: Server-side rendering (SSR)

While some plugins work straight out of the box with Nuxt&#39;s default SSR setup, others do not.

If you try out `ThrowPropsPlugin` with `Draggable`, you will see it works. But if you try to add the `GSDevTools` or `SplitTextPlugin`, for example. You will get an error during compilation along the lines of:

```bash
export 'default' (imported as 'GSDevTools') was not found in '~/assets/vendor/GSDevTools
```

This has something to do with the intricacies of Node servers, the lack of the `window` object amongst other things I will not pretent to know about. All I know is that, to get those plugins to work when this error happens you have to access the plugins only when the code is running in the client, not in the server. For that you will have to `require` the plugin instead of `import`. Why? Because, you cannot have an `import` statement inside a conditional but you can have a `require` assigned to a variable.

``` javascript
if(process.client) {
  const GSDevTools = require('~/assets/vendor/GSDevTools')
  const SplitText = require('~/assets/vendor/SplitText')
}
```

> See Nuxt&#39;s [own documentation](https://nuxtjs.org/faq/window-document-undefined#window-or-document-undefined-) on the matter.

Plugins that **do not** require the `process.client` check:

- Draggable
- DrawSVGPlugin
- MorphSVGPlugin
- Physics2DPlugin
- PhysicsPropsPlugin
- ScrambleTextPlugin
- ThrowPropsPlugin

Plugins that **do** require the `process.client` check:

- CustomBounce
- CustomEase
- CustomWiggle
- GSDevTools
- SplitTextPlugin

### A Note on using GSAP&#39;s ES6 modules

If, for whatever reason, you still think you should use GSAP&#39;s ES6 modules version, you will have to ask Nuxt to [transpile them during the build stage](https://nuxtjs.org/guide/plugins/#es6-plugins).

``` javascript
  build: {
    transpile: ['TweenMax', 'TimelineMax']
  }
}
```

_I have not tested all plugins with this method yet. I should do at some point in the future and update this entry._
