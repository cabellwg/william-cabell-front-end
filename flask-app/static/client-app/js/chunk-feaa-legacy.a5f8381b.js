(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-feaa"],{"01f9":function(t,e,n){"use strict";var r=n("2d00"),o=n("5ca1"),i=n("2aba"),a=n("32e9"),s=n("84f2"),c=n("41a0"),l=n("7f20"),u=n("38fd"),f=n("2b4c")("iterator"),p=!([].keys&&"next"in[].keys()),h="@@iterator",d="keys",m="values",v=function(){return this};t.exports=function(t,e,n,g,y,b,_){c(n,e,g);var w,k,j,L=function(t){if(!p&&t in x)return x[t];switch(t){case d:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},A=e+" Iterator",E=y==m,C=!1,x=t.prototype,S=x[f]||x[h]||y&&x[y],R=S||L(y),I=y?E?L("entries"):R:void 0,O="Array"==e&&x.entries||S;if(O&&(j=u(O.call(new t)),j!==Object.prototype&&j.next&&(l(j,A,!0),r||"function"==typeof j[f]||a(j,f,v))),E&&S&&S.name!==m&&(C=!0,R=function(){return S.call(this)}),r&&!_||!p&&!C&&x[f]||a(x,f,R),s[e]=R,s[A]=v,y)if(w={values:E?R:L(m),keys:b?R:L(d),entries:I},_)for(k in w)k in x||i(x,k,w[k]);else o(o.P+o.F*(p||C),e,w);return w}},"0861":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACACAYAAAA73po8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNTFCNjNERjFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNTFCNjNFMDFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1MUI2M0REMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE1MUI2M0RFMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oJuRQQAABQBJREFUeNrsnT1MFEEUgG+MVpAgjSY2HI2xBCnUjgCFJhYkdFYY0cTOAhupsbGXRDChsyKBhAQKIXRggdBigdAYtRGS28bmfANzyYKXY3dvhp2d/b7kubBxf27fx8ybvdk7Va/XK+dRSo3LYlRiUKKrAkXmWGJDYlFyPd/WnrQsjRD6JHb1aiLI0Lnti+c8TcRF0a3JERc0+NA5Hs8iizr5RyndouzQYpeqaxqU3O+m2aghy4H83MM1LBWHkvtqmg2umGIWUcpHj8l9cllMrQLlZDRVN2SKHigp0hWpNC0LALIAsgCyALIAsgCyACALIAuEJEtHR8eWxHOJXn23sBHy+12zfos0FAcn8yZEgk2J/iTzJOT/DUnsVZhrcumRavKTI1Gms0yu0duRwBLJIgmfyDptzwgzQRJLIEvWFqWJMO9JpH+yWJuioAvVWq32wFYh1dnZuRdF0W1KSscFa05TFKYsv46XpNIvrLQstlsVWpewW5YFR69llnSGd1NuzdH5rZGiwLqhNE1Z6hNUijnCARa4QDcEYFEWGbVUXZycq/1Cvi3LiKPzGyFF4cky5uj8xkhRYKMhjZ6vUqvVDmx2QVEUfSdFYY6GZiy/jhlS6aFcFU+mJzBNgfksiIIs9oWR7SZJYMlkMcKsSFQTSlLVc3ZJXkkmP7UYJa1WTt+V/hwfLclop18WA3p4LKOeh5SO/o+G+DAfZOGNRPD3Di4gCwCyALKAS65yCazcHtAP969LfJX4I7Hf5DZBt/l1WKJX3zYo2pMLDJ3bE2ROYkHEOMqyD5HoeuV0GsaEiHPf96GzVVlsTtxOO1Hb1rEvOq6RZEoEWbeZNDMrcOayb1Aii4PjiiS/ZPHEtiRNpBmSxapIc803WShwk3U5n2Rxx7UoGnOMG3LMb0HXLCG2LPoddEngx8tOjKlnvrgugmlZ7LUouYhiWhhdNN8z3Z8XIIuHopwT5hGy+C3K67xFiQmzI+fzlprFw5pFaoUVSdAjn+Q19ctvFyMkapb28O5DhEx3lHtLR8tSEFw9R0XLEiD6vaa8770gS7GYRRZISq6fhEXNUjBsfxIWNUvA5PnFGMiSflQyJjEjsan/yuOh10lMmvsirtjN8/Xn8nRbgkclczt2i28u+VlJ9jTmX4lnjs5juhLC46uhypI1QS6E0dLmlTO6oYu7nckoit5k2Va2mzPzb4MAWVqLMiQJf9fmbmy/CbjP0NnDobOt7w6QrqM766Ru18Nnhs6WRj0WZ6kN0w2FzYTFffUjS8BYfiSDliXkwpargCxJGeASIEtSej3fH7J4hNWCVOqfm8gCdEMAyAJtwe1+C8cu8vlxux/ohgBZAFkAWQBZAJAFkAWQBZAFkAWQBQBZAFkAWQBZAFkAWQCQBZAFkAWQBYoE3+sMZ1BK3ZLF43Orl+v1+g9kgf9EETE+nFv/QmIZWSDOiShajti67cY6ahZoihbEtDAD1CxwUZfUaF22GQ1B6paFB+MtHLvI5xc/r1YFrh4RWZUFCtmCqKRDZ2RBFj5yA+yDLIAsgCyALIAsgCyALADIAsgCOciyxGUoLUtpZVnkmpWWVLlX+pvAlVIH8nMP165UHEruq1lqllGuXak4zpLzE1nEsF1ZPDU7gfBFeWVyng7dDTVC6JPQO6kTQYbObV8852lCGUnOFjJKjZtmalCiiz/GwrckG7qYlVzPt7OjfwIMAN9R2U1EzV3sAAAAAElFTkSuQmCC"},"08ab":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"block-footer__footer"},[r("div",{staticClass:"block-footer__logos"},[r("a",{attrs:{href:"https://www.linkedin.com/in/william-cabell-16180/",target:"_blank"}},[r("img",{staticClass:"block-footer__logo --lighten",attrs:{src:n("0861"),alt:"Go to my LinkedIn"}})]),r("a",{attrs:{href:"https://gitlab.com/cabellwg",target:"_blank"}},[r("img",{staticClass:"block-footer__logo",attrs:{src:n("9190"),alt:"Go to my Gitlab"}})])]),r("caption",{staticClass:"block-footer__bottom-text"},[r("i",[t._v("v0.0.2")])])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[t.showThemes?n("div",{staticClass:"modal"},[n("button",{staticClass:"modal__x",on:{click:function(e){t.$emit("update:showThemes",!t.showThemes)}}},[t._v("\n    ×\n  ")]),n("div",{staticClass:"modal__container"},[n("h3",[t._v("Pick a theme")])])]):t._e()])},a=[],s={props:{showThemes:Boolean}},c=s,l=(n("2526"),n("2877")),u=Object(l["a"])(c,i,a,!1,null,null,null);u.options.__file="themes-modal.vue";var f=u.exports,p={components:{ThemesModal:f},data:function(){return{showThemes:!1}}},h=p,d=(n("7258"),Object(l["a"])(h,r,o,!1,null,null,null));d.options.__file="block-footer.vue";e["a"]=d.exports},"0d58":function(t,e,n){var r=n("ce10"),o=n("e11e");t.exports=Object.keys||function(t){return r(t,o)}},1495:function(t,e,n){var r=n("86cc"),o=n("cb7c"),i=n("0d58");t.exports=n("9e1e")?Object.defineProperties:function(t,e){o(t);var n,a=i(e),s=a.length,c=0;while(s>c)r.f(t,n=a[c++],e[n]);return t}},1993:function(t,e,n){t.exports=n.p+"../static/client-app/img/cds-screenshot.9f9b4078.jpeg"},2526:function(t,e,n){"use strict";var r=n("c577"),o=n.n(r);o.a},"2aeb":function(t,e,n){var r=n("cb7c"),o=n("1495"),i=n("e11e"),a=n("613b")("IE_PROTO"),s=function(){},c="prototype",l=function(){var t,e=n("230e")("iframe"),r=i.length,o="<",a=">";e.style.display="none",n("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+a+"document.F=Object"+o+"/script"+a),t.close(),l=t.F;while(r--)delete l[c][i[r]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[c]=r(t),n=new s,s[c]=null,n[a]=t):n=l(),void 0===e?n:o(n,e)}},"2ff2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("info-page",{attrs:{"number-of-fields":4}},[r("h2",{attrs:{slot:"intro-heading"},slot:"intro-heading"},[t._v("Projects")]),r("p",{attrs:{slot:"intro-text"},slot:"intro-text"},[t._v("\n  These are some of the projects I've worked on. Some are pieces of professional work I've done and some are personal projects of mine. If you have questions about any of them, don't hesitate to "),r("a",{staticClass:"intro__text--link",on:{click:t.goToContact}},[t._v("contact me")]),t._v(".\n")]),r("section",{staticClass:"project",attrs:{slot:"1"},slot:"1"},[r("h1",{staticClass:"project__heading"},[t._v("Converses to the Splitting Lemma in the Category of Groups")]),r("caption",{staticClass:"project__caption"},[t._v("Spring semester 2018")]),r("figure",{staticClass:"project__math-container"},[r("a",{staticClass:"project__math-container--cover",attrs:{target:"_blank",href:"https://drive.google.com/file/d/1slWQsiMRJ_T8VWe0erpysymL3RrAHogU/view?usp=sharing"}},[t._v("\n      Click to download paper\n    ")]),r("div",{attrs:{id:"+++0"}})]),r("p",{staticClass:"project__description"},[t._v("I developed an admittedly basic but defendably nontrivial theorem defining a certain way to decompose certain a certain type of group over the "),r("a",{staticClass:"project__description--link",attrs:{href:"https://groupprops.subwiki.org/wiki/Internal_semidirect_product",target:"_blank"}},[t._v("semidirect product")]),t._v(". The theorem forms a (very) partial converse to the "),r("a",{staticClass:"project__description--link",attrs:{href:"https://en.wikipedia.org/wiki/Splitting_lemma",target:"_blank"}},[t._v("splitting lemma")]),t._v(". The full paper can be found "),r("a",{staticClass:"project__description--link",attrs:{target:"_blank",href:"https://drive.google.com/file/d/1slWQsiMRJ_T8VWe0erpysymL3RrAHogU/view?usp=sharing"}},[t._v("here")]),t._v(".")]),r("p",{staticClass:"project__description"},[t._v("The project was overseen and the original topic of investigating the converse of the splitting lemma was suggested by Dr. Peter Linnell, and I can't thank him enough for taking the time and expending the effort to help me start my mathematics career.")])]),r("section",{staticClass:"project",attrs:{slot:"2"},slot:"2"},[r("h1",{staticClass:"project__heading"},[t._v("Financial Monte Carlo Simulation")]),r("caption",{staticClass:"project__caption"},[t._v("Summer internship 2018")]),r("figure"),r("p",{staticClass:"project__description"},[t._v("At the "),r("a",{staticClass:"project__description--link",attrs:{target:"_blank",href:"http://www.moneyguidepro.com/ifa/"}},[t._v("PIEtech, Inc.")]),t._v(" summer internship, I designed and built Monte Carlo simulations of stock prices and bond yields. To model stock prices, I settled on a discretized "),r("a",{staticClass:"project__description--link",attrs:{href:"https://en.wikipedia.org/wiki/Geometric_Brownian_motion",target:"_blank"}},[t._v("geometric Brownian motion")]),t._v(" model, which is the stochastic process used to sample prices for the "),r("a",{staticClass:"project__description--link",attrs:{href:"https://en.wikipedia.org/wiki/Black%E2%80%93Scholes_model",target:"_blank"}},[t._v("Black-Scholes model")]),t._v(". For bond yields, I used a random walk. Read more about the project and the mathematics behind it on "),r("a",{staticClass:"project__description--link",attrs:{target:"_blank",href:"https://gitlab.com/cabellwg/monte-carlo"}},[t._v("my GitLab")]),t._v(".")])]),r("section",{staticClass:"project",attrs:{slot:"3"},slot:"3"},[r("h1",{staticClass:"project__heading"},[t._v("This!")]),r("caption",{staticClass:"project__caption"},[t._v("Summer 2018")]),r("figure"),r("p",{staticClass:"project__description"},[t._v("I made this website of my own accord over summer 2018. It uses Vue.js, Flask, and Docker. It is ridiculously overengineered for its scale. The source code is available on "),r("a",{staticClass:"project__description--link",attrs:{target:"_blank",href:"https://gitlab.com/cabellwg/williamcabell"}},[t._v("my GitLab")]),t._v(".")])]),r("section",{staticClass:"project",attrs:{slot:"4"},slot:"4"},[r("h1",{staticClass:"project__heading"},[t._v("Cabell Design Studio")]),r("caption",{staticClass:"project__caption"},[t._v("Summer 2017")]),r("figure",{staticClass:"project__img-container"},[r("a",{staticClass:"project__img-container--cover",attrs:{target:"_blank",href:"https://cabelldesignstudio.com"}},[t._v("\n      cabelldesignstudio.com\n    ")]),r("img",{staticClass:"project__img",attrs:{src:n("1993"),alt:"CDS homepage"}})]),r("p",{staticClass:"project__description"},[t._v("I built this website for my mom's interior design business. It uses a good old-fashioned LAMP stack (sans MySQL, because it doesn't really need any kind of database) and Apache-served HTML, CSS, and jQuery on the front end. There's some AJAX sprinkled around, and some attempts (with mixed success) at loading-time optimization (it's a very image-heavy website).")])])])},o=[];n("ac6a"),n("96cf");function i(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t,e){try{var n=i[t](e),a=n.value}catch(t){return void o(t)}n.done?r(a):Promise.resolve(a).then(s,c)}function s(t){a("next",t)}function c(t){a("throw",t)}s()})}}n("551c");var a=n("f1e1"),s=n("c665"),c=n("a322"),l=function t(){Object(s["a"])(this,t)};Object(c["a"])(l,"portfolioDisplays",["K \\rtimes H \\cong S_i \\rtimes \\left(K/S_i \\rtimes H\\right)"]);var u={components:{InfoPage:a["a"]},methods:{goToContact:function(){this.$router.push("contact")}},mounted:function(){var t=i(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={colorIsTextColor:!0},t.next=3,n.e("3b2f").then(n.t.bind(null,"3b2f",7));case 3:r=t.sent,l.portfolioDisplays.forEach(function(t,n){var o=document.getElementById("+++"+n);e.display=!0,r.render(t,o,e)});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},f=u,p=(n("6b8f"),n("2877")),h=Object(p["a"])(f,r,o,!1,null,null,null);h.options.__file="projects.vue";e["default"]=h.exports},"38fd":function(t,e,n){var r=n("69a8"),o=n("4bf8"),i=n("613b")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},"41a0":function(t,e,n){"use strict";var r=n("2aeb"),o=n("4630"),i=n("7f20"),a={};n("32e9")(a,n("2b4c")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},"442e":function(t,e,n){"use strict";var r=n("6b23"),o=n.n(r);o.a},"4bb3":function(t,e,n){},"4bf8":function(t,e,n){var r=n("be13");t.exports=function(t){return Object(r(t))}},"613b":function(t,e,n){var r=n("5537")("keys"),o=n("ca5a");t.exports=function(t){return r[t]||(r[t]=o(t))}},"626a":function(t,e,n){var r=n("2d95");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},6821:function(t,e,n){var r=n("626a"),o=n("be13");t.exports=function(t){return r(o(t))}},"6b23":function(t,e,n){},"6b8f":function(t,e,n){"use strict";var r=n("ca0f"),o=n.n(r);o.a},7258:function(t,e,n){"use strict";var r=n("4bb3"),o=n.n(r);o.a},"77f1":function(t,e,n){var r=n("4588"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},9190:function(t,e,n){t.exports=n.p+"../static/client-app/img/gitlab-logo.6273b15d.svg"},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=_;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",m={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(O([])));y&&y!==r&&o.call(y,a)&&(v=y);var b=L.prototype=k.prototype=Object.create(v);j.prototype=b.constructor=L,L.constructor=j,L[c]=j.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},A(E.prototype),E.prototype[s]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,n,r){var o=new E(_(t,e,n,r));return u.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},A(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=O,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function _(t,e,n,r){var o=e&&e.prototype instanceof k?e:k,i=Object.create(o.prototype),a=new I(r||[]);return i._invoke=C(t,n,a),i}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function k(){}function j(){}function L(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(n,r,i,a){var s=w(t[n],t,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},a)}a(s.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function C(t,e,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return F()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=w(t,e,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function x(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,x(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=w(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:F}}function F(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},"9c6c":function(t,e,n){var r=n("2b4c")("unscopables"),o=Array.prototype;void 0==o[r]&&n("32e9")(o,r,{}),t.exports=function(t){o[r][t]=!0}},a322:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return r})},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),i=n("2aba"),a=n("7726"),s=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),f=l("toStringTag"),p=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(h),m=0;m<d.length;m++){var v,g=d[m],y=h[g],b=a[g],_=b&&b.prototype;if(_&&(_[u]||s(_,u,p),_[f]||s(_,f,g),c[g]=p,y))for(v in r)_[v]||i(_,v,r[v],!0)}},be13:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},c366:function(t,e,n){var r=n("6821"),o=n("9def"),i=n("77f1");t.exports=function(t){return function(e,n,a){var s,c=r(e),l=o(c.length),u=i(a,l);if(t&&n!=n){while(l>u)if(s=c[u++],s!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},c577:function(t,e,n){},c665:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r})},ca0f:function(t,e,n){},cadf:function(t,e,n){"use strict";var r=n("9c6c"),o=n("d53b"),i=n("84f2"),a=n("6821");t.exports=n("01f9")(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},ce10:function(t,e,n){var r=n("69a8"),o=n("6821"),i=n("c366")(!1),a=n("613b")("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,l=[];for(n in s)n!=a&&r(s,n)&&l.push(n);while(e.length>c)r(s,n=e[c++])&&(~i(l,n)||l.push(n));return l}},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},e11e:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},f1e1:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-page"},[n("section",{staticClass:"intro"},[t._t("intro-heading"),t._t("intro-text")],2),t._l(t.numberOfFields,function(e){return n("section",{key:e,ref:"sections",refInFor:!0},[t._t(e)],2)}),n("block-footer",{staticClass:"block-footer--uncentered"})],2)},o=[],i=(n("ac6a"),n("551c"),n("08ab")),a={components:{BlockFooter:i["a"]},props:["numberOfFields"],mounted:function(){this.$refs.sections.forEach(function(t,e){e%2==0?t.classList.add("info-page--dark"):t.classList.add("info-page--light")})}},s=a,c=(n("442e"),n("2877")),l=Object(c["a"])(s,r,o,!1,null,null,null);l.options.__file="info-page.vue";e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-feaa-legacy.a5f8381b.js.map