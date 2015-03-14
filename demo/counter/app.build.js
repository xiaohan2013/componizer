(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var counter = require('./')

counter.render('demo')
},{"./":3}],2:[function(require,module,exports){
var cssText = "\n.counter {\n    color: red;\n    font-size: 128px;\n}"

exports.apply = function () {
    var cssEle = document.createElement('style')
    cssEle.innerHTML = cssText
    document.head.appendChild(cssEle)
}
},{}],3:[function(require,module,exports){
"use strict";

// apply your components style
require('./css/index').apply()

// get your template string
var tmplStr = require('./tmpl/index').str

exports.render = function (eleId) {
    var dom = document.getElementById(eleId)
    var count = 0
    setInterval(function () {
        dom.innerHTML = tmplStr.replace('{count}', ++count)
    }, 1000)
}

},{"./css/index":2,"./tmpl/index":4}],4:[function(require,module,exports){
exports.str = "<div class=\"counter\">\n  {count}\n</div>"
},{}]},{},[1]);
