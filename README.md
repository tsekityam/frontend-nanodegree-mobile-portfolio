# Website Performance Optimization portfolio project

This project is the 4th project of Front-End Web Developer Nanodegree.


## How to build and run the project
### Requirement
* node-6.6.0
* imagemagick-6.9.5-9_2

1. install gulp command line utility
```sh
$ npm install gulp-cli
```

2. initialize project directory
``` sh
$ npm init
```

3. install gulp and plugins in project directory
``` sh
npm install gulp gulp-imagemin imagemin-pngquant gulp-image-resize gulp-rename gulp-uglify
```

4. run gulp
``` sh
$ gulp
```
Now the project is built from source and the output is available in `docs/`, open `docs/index.html` to see the result.

## What have been changed

1. introduce [Gulp](http://gulpjs.com) to the project

2. optimize images
  * resize pizzeria image used in `index.html`
  * compress images

3. remove Render-Blocking JavaScript
  * load non essential JavaScript asynchronously

4. optimize CSS delivery
  * inline CSS files

5. minify JavaScript
  * minify JavaScript being used in `pizza.html`

6. avoid forced synchronous layouts
  * avoid reading a constant value in a loop
  * simplify the way we get the new pizza size
