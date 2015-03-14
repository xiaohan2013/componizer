componizer
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

Organize your web components code, include js,css and html template, write a components more efficiently and simply.

Componizer use a [node](https://nodejs.org/)-style `require()` to organize your component code, so you need use it with [browserify](http://browserify.org/).

Installation
---

```sh
npm install componizer -g
```

Demo
---
Download the code and open `demo/app.html` you will get a simple demo.


5 Step to build your own component with componizer
---

**1 Init**

```sh
mkdir demo
cd demo
componizer init
```

After init your files:

```
index.js
css/index.css
tmpl/index.html
```

**2 Build**

```sh
componizer build
```

After build your files:

```
index.js # no changed
css/index.css # source code
css/index.js
tmpl/index.html # source code
tmpl/index.js
```

**3 Add your App**

```shell
touch app.html
touch app.js
```

app.html:

```html
<!doctype html>
<html>
<head>
  <title>demo</title>
</head>
<body>
  <div id="demo"></div>
  <script type="text/javascript" src="app.build.js"></script>
</body>
</html>
```

app.js:

```js
var demoCoponent = require('./index')
demoCoponent.render('demo')
```

**5 Browserify**

```shell
browserify app.js -o app.build.js
```

Then open app.html you will get the demo.
You can edit `index.js`, `index.css`, `index.tmpl` to build your own app.
Suggest to use [watch](https://www.npmjs.com/package/watch) to make auto build and browserify.

Wiki
---


componizer will build all template file in directory tmpl to a js CMD module.

componizer will build all css file in directory css to a js CMD module.

Options you can use:

```
-t, --tmplExt : appoint your template file ext.
```

License
---

[![License][license-image]][license-url]

[npm-image]: https://img.shields.io/npm/v/componizer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/componizer
[downloads-image]: http://img.shields.io/npm/dm/componizer.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/componizer
[license-image]: http://img.shields.io/npm/l/componizer.svg?style=flat-square
[license-url]: #