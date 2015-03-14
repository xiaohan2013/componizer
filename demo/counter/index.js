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
