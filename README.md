# `william-cabell-front-end`
[![License information](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://github.com/cabellwg/williamcabell/blob/master/LICENSE) [![Vue.js](https://img.shields.io/badge/Vue.js-2.5-42b983.svg)](https://vuejs.org) [![Nginx](https://img.shields.io/badge/Nginx-1.17-009639.svg)]()

My personal website. It has a randomly generated quote on the front of it because I'm cool. Or at least that's what my mom says. And she also says that I don't have to care about what the other kids think so I don't even want to hear it.

And I did quote some code I wrote. Yes, I quoted myself. It's a free fucking country. I can do that and I don't have to justify it.

---

#### Front-End Tech:

* [Vue.js](https://vuejs.org)

Client-side routing, web components, animations, [Babel](https://babeljs.io/) ES6 support including polyfills for legacy browsers. Vue CLI provides bundling and build optimizations, including separate bundles for legacy browsers.

* [Sass](https://sass-lang.com)

Layout done entirely by hand (i.e. no Bootstrap) with the Sass CSS preprocessor. Vue.js automatically prefixes the compiled CSS, so the Sass code does not include any prefixes.

* [Docker CE](https://www.docker.com/)

Basic nginx image with a custom config to add worker processes and add error pages.
