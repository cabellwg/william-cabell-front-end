# William Cabell

> This is my personal website. For now, it has my full résumé and links to some of my projects, as well as a contact page to get in touch with me. I have plans to add several interactive demos in the future, which is part of the reason why it's so overengineered for what it currently is.

---

#### The Stack:

###### Front-end

* [Vue.js](https://vuejs.org/)

Routing, web components, animations, [Babel](https://babeljs.io/) ES6 support including polyfills for legacy browsers. Vue CLI provides bundling and build optimizations, including separate bundles for legacy browsers.
* [Sass](https://sass-lang.com/)

Layout done entirely by hand (i.e. no Bootstrap) with the Sass preprocessor. Vue.js automatically prefixes the compiled CSS, so the Sass code does not include any prefixes.

###### Back-end

* [Flask](http://flask.pocoo.org/)

Yup, just Python. Don't worry, I do actually know [how](https://gitlab.com/cabellwg/monte-carlo/tree/master/MonteCarlo) [to](https://gitlab.com/cabellwg/math-playground) [code](https://gitlab.com/cabellwg/tax-planning) as well. I chose Flask so I could easily integrate with some [data science stuff](https://gitlab.com/cabellwg/noaa-data-playground) I've been toying with recently.

###### Server

* [Apache](https://www.apache.org/)
* [WSGI](https://www.python.org/dev/peps/pep-0333/)

Apache uses [`mod_wsgi`](https://pypi.org/project/mod_wsgi/) to serve the Flask application.
* Ubuntu 18.04

###### Hosting & DNS

* GoDaddy DNS registration services

I'm not linking them because I think their prices are ludicrous (although not much better anywhere else) and they tried to sell me an SSL certificate for like $100 per year even when [Let's Encrypt](https://letsencrypt.org/) exists. I did buy from them though so I guess ultimately I'm the sucker.
* [DigitalOcean](https://www.digitalocean.com/) cloud platform

One droplet of the cheapest option available. Maybe I'll need to expand in the future – it's good to know I have the ability and honestly it's cheaper than a lot of normal Apache hosting services I've used before.

###### VCS

* Git, obviously.

---

#### Basic structure:

* Front-end code can be found in the `vue-app` directory
* Back-end code can be found in the `flask-app` directory

I maintain a separate (private, sorry) repository for production, so I have no need to keep the compiled front-end tracked on VC. I can provide those on request, if for some reason you, dear reader, are interested. Email me at [william16180@gmail.com](mailto:william16180@gmail.com) or go to the [contact page](https://williamcabell.me/contact) and fill out the form (I guess you could also raise an issue on this repo but please don't do that unless there's actually an issue).

