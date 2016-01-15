/*
 * underscore.template 0.1.5
 * Extracted template from Underscore, use '_.template' without full underscore source.
 * https://github.com/superRaytin/underscore.template
 *
 * Copyright 2015, Leon Shi
 * Released under the MIT license.
*/

!function e(n,r,t){function o(a,i){if(!r[a]){if(!n[a]){var c="function"==typeof require&&require;if(!i&&c)return c(a,!0);if(u)return u(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=r[a]={exports:{}};n[a][0].call(f.exports,function(e){var r=n[a][1][e];return o(r?r:e)},f,f.exports,e,n,r,t)}return r[a].exports}for(var u="function"==typeof require&&require,a=0;a<t.length;a++)o(t[a]);return o}({1:[function(e,n,r){"use strict";function t(e,n,r){return o(e,n,r)}var o=e("./underscore.template");n.exports=t,"function"==typeof define&&define.amd?define(function(){return t}):("undefined"!=typeof window||"undefined"!=typeof navigator)&&(window.UnderscoreTemplate=t)},{"./underscore.template":2}],2:[function(e,n,r){"use strict";var t={},o=Array.prototype,u=o.slice,a=o.forEach,i=Object.keys,c=function(){},f=c.each=c.forEach=function(e,n,r){if(null!=e)if(a&&e.forEach===a)e.forEach(n,r);else if(e.length===+e.length){for(var o=0,u=e.length;u>o;o++)if(n.call(r,e[o],o,e)===t)return}else for(var i=c.keys(e),o=0,u=i.length;u>o;o++)if(n.call(r,e[i[o]],i[o],e)===t)return};c.keys=i||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var n=[];for(var r in e)c.has(e,r)&&n.push(r);return n},c.defaults=function(e){return f(u.call(arguments,1),function(n){if(n)for(var r in n)void 0===e[r]&&(e[r]=n[r])}),e};var l={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}},p={escape:new RegExp("["+c.keys(l.escape).join("")+"]","g")};c.each(["escape"],function(e){c[e]=function(n){return null==n?"":(""+n).replace(p[e],function(n){return l[e][n]})}}),c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var s=/(.)^/,_={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},v=/\\|'|\r|\n|\t|\u2028|\u2029/g;c.template=function(e,n,r){var t;r=c.defaults({},r,c.templateSettings);var o=new RegExp([(r.escape||s).source,(r.interpolate||s).source,(r.evaluate||s).source].join("|")+"|$","g"),u=0,a="__p+='";e.replace(o,function(n,r,t,o,i){return a+=e.slice(u,i).replace(v,function(e){return"\\"+_[e]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),t&&(a+="'+\n((__t=("+t+"))==null?'':__t)+\n'"),o&&(a+="';\n"+o+"\n__p+='"),u=i+n.length,n}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(r.variable||"obj","_",a)}catch(i){throw i.source=a,i}if(n)return t(n,c);var f=function(e){return t.call(this,e,c)};return f.source="function("+(r.variable||"obj")+"){\n"+a+"}",f},n.exports=c.template},{}]},{},[1]);