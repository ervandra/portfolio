"use strict";var precacheConfig=[["/portfolio/index.html","46bd3d276114ce79ea64ad44d3dbdad6"],["/portfolio/static/css/main.95be35dd.css","ac052f71de3f231864bc6ee550dd2f75"],["/portfolio/static/js/main.264ab998.js","f632d37fe60fc13c7c65cd0aba6bf9f7"],["/portfolio/static/media/bg4.aae88f74.jpg","aae88f748585922d4d13ea4d9da57a4e"],["/portfolio/static/media/bg9.553e4e40.jpg","553e4e404f0ea1b4aefb4247f0962889"],["/portfolio/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/portfolio/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/portfolio/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/portfolio/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/portfolio/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/portfolio/static/media/geomanist.040d5445.woff2","040d5445e4b60d4e475f7c5df35c8514"],["/portfolio/static/media/geomanist.106e9226.eot","106e922632889df12d714bd8a4873613"],["/portfolio/static/media/geomanist.762bdd36.ttf","762bdd3648377f83c8c1e6b54167aa58"],["/portfolio/static/media/geomanist.88451ce2.svg","88451ce251bfd716022463e861d959e9"],["/portfolio/static/media/geomanist.a67eb734.woff","a67eb734a3d893fbf97f31c54b258c3e"],["/portfolio/static/media/lato.0e5c17fd.woff","0e5c17fd313c4114cf22234c1be86a9c"],["/portfolio/static/media/lato.b2d25acf.ttf","b2d25acf1f38684151ab14b849269c16"],["/portfolio/static/media/lato.ec7c6467.svg","ec7c6467b244ac9da94f480ef444b70d"],["/portfolio/static/media/lato.f37acdbb.eot","f37acdbb17ca91a4c397d10b78529c80"],["/portfolio/static/media/lato.f5f2320e.woff2","f5f2320e149450fef0dc573df3135759"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var o=new URL(e);return n&&o.pathname.match(n)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),o=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var o="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(o,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});