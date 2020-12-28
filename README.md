# GSAP & Plugins in Nuxt

#### A skeleton repo to help setup GSAP&#39;s plugins in Nuxt

This example repo follows the [manual installation](https://nuxtjs.org/docs/2.x/get-started/installation#manual-installation) steps from Nuxt's documentation with the 'static' mode as the [target output](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-target) for the sake of simplicity.

## Start Nuxt dev server

In your command-line terminal of choice, assuming you have followed the steps for the [Manual installation](https://nuxtjs.org/docs/2.x/get-started/installation#manual-installation), start your local sever with the following command.

``` bash
# Using NPM
# serve with hot reload at localhost:3000
$ npm run dev
```
or

``` bash
# Using Yarn
# serve with hot reload at localhost:3000
$ yarn dev
```

## Adding GSAP and its plugins

Firstly it is worth mentioning that you **don&#39;t have to** add GSAP and many of its plugins to your application&#39;s bundle. It works just fine being pulled from a CDN, and it will probably already be cached in your visitor&#39;s browser due to GSAP&#39;s prevalence on the internet.

In its current form, GSAP is designed to work as a global object attached to the `window`. If you can have GSAP as an external script tag, it is recommended that you do so.

## GSAP as a global dependency

List the CDN urls in your `nuxt.config.js` file like the following:

``` javascript
export default {
  head: {
    script: [
      {
        // 90% Of your needs will be covered by TweenMax
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js'
      },
      {
        // Non-premium plugins will all be available via CDN
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/Draggable.min.js'
      },
    ]
  }
}
```

> See Nuxt&#39;s documentation on adding [global settings](https://nuxtjs.org/faq#global-settings) to your application.

All is now set and you can use GSAP in any of your components.

### GSAP&#39;s premium plugins as globals

GSAP&#39;s premium plugins are not available via CDN links. They are available to Club GreenSock members under the &#39;Downloads&#39; section of their account profiles (_if you are not a club member, you can get more information [on this page](https://greensock.com/club/)_).

To add _members-only_ plugins to your Nuxt project, download them from your profile page, add the chosen plugins into Nuxt&#39;s `static` folder and add a reference on the `script` section of `nuxt.config.js` file.

> Nuxt documentation on [static assets](https://nuxtjs.org/docs/2.x/directory-structure/static).


``` javascript
export default {
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/Draggable.min.js'
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

Install GSAP as a dependency of your project using NPM or Yarn.

``` bash
# Using NPM
npm install gsap
```

``` bash
# Using Yarn
yarn add gsap
```

`import` GSAP and its plugins in the relevant component.

``` html
<script>
import { gsap } from "gsap"
import { Draggable } from 'gsap/Draggable.js'

export default {
  mounted: function () {
    // Be sure to register any plugins that are imported
    
    gsap.registerPlugin(Draggable)
  }
}
</script>
```

That is it. GSAP is ready to be used anywhere it is imported.


> More detailed information on GSAP&#39;s NPM usage can be found in the [official documentation](https://greensock.com/docs/v3/Installation).

### Bundling premium plugins

Because of licensing, GSAP&#39;s premium plugins are not openly available via NPM. Please refer to the [official documentation](https://greensock.com/docs/v3/Installation#ZIP) for up-to-date instructions on how to add them to your project.


#### Caveat: Server-side rendering (SSR)

While some plugins work straight out of the box with Nuxt&#39;s default SSR setup, others do not.

This has to do with the intricacies of Node servers, the lack of the `window` object amongst other things I will not pretent to know about.

In order to compile correctly, Nuxt needs to know it has to trasnpile GSAP into a format the Node server can work with. In your `nuxt.config.js` add a `transpile` property to the `build` object.

```javascript
export default {
  ...
  build: {
    ...
    transpile: ['gsap']
  }
}
```
You might also have to check if the code is being run in the client-side before registering a plugin.

``` javascript
if(process.client) {
  gsap.registerPlugin(Draggable)
}
```

> See Nuxt&#39;s documentation on the [transpile option](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build#transpile) and checking if the [window object is available](https://nuxtjs.org/faq/window-document-undefined) on the matter.