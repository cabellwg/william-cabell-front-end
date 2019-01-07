# William Cabell

> This is my personal website. For now, it has my full résumé and links to some of my projects, as well as a contact page to get in touch with me. I will probably add several interactive demos in the future, which is part of the reason it's so overengineered for what it currently is.

---

#### The Stack:

###### Front-end

* [Vue.js](https://vuejs.org/)

Routing, web components, animations, [Babel](https://babeljs.io/) ES6 support including polyfills for legacy browsers. Vue CLI provides bundling and build optimizations, including separate bundles for legacy browsers.
* [Sass](https://sass-lang.com/)

Layout done entirely by hand (i.e. no Bootstrap) with the Sass preprocessor. Vue.js automatically prefixes the compiled CSS, so the Sass code does not include any prefixes.

###### Back-end

* [Flask](http://flask.pocoo.org/)

Yup, just Python. Don't worry, I do actually know [how](https://github.com/cabellwg/monte-carlo/tree/master/MonteCarlo) [to](https://github.com/cabellwg/math-playground) [code](https://github.com/vt-sailbot/sailbot-19) as well.

###### Server

* [Apache](https://www.apache.org/)
* [WSGI](https://www.python.org/dev/peps/pep-0333/)

Apache uses [`mod_wsgi`](https://pypi.org/project/mod_wsgi/) to serve the Flask application.
* Ubuntu 18.04

###### Hosting & DNS

* GoDaddy DNS registration services
* [DigitalOcean](https://www.digitalocean.com/) cloud platform

One droplet of the cheapest option available. Maybe I'll need to scale in the future?

###### DevOps

* Git, obviously.
* Custom bash CD hook

---

#### Basic structure:

* Front-end code can be found in the `vue_app` directory
* Back-end code can be found in the `flask_app` directory
