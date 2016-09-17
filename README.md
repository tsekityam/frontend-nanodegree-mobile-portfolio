# Website Performance Optimization portfolio project

This project is the 4th project of Front-End Web Developer Nanodegree.

The source code is placed in `src` directory; the production code, which will be used to generate GitHub Pages, can be found in `docs`. The output is available in https://tsekityam.github.io/frontend-nanodegree-mobile-portfolio/

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

 related commits: [b357f9f](https://github.com/tsekityam/frontend-nanodegree-mobile-portfolio/commit/b357f9f99ba0828431353d6ea8008993d47eab96)

1. optimize images
  * resize pizzeria image used in `index.html`
  * compress images

   related commits: [cabe2f3](https://github.com/tsekityam/frontend-nanodegree-mobile-portfolio/commit/cabe2f3b929987f4236ee23f95cb2e7d7f2307c7)

1. remove Render-Blocking JavaScript
  * load non essential JavaScript asynchronously

   related commits: [298d823](https://github.com/tsekityam/frontend-nanodegree-mobile-portfolio/commit/298d823a72e84cc60a6a84d094e110e0bbeb43f4)

1. use CSS media queries

    related commits: [1d77fb7](https://github.com/tsekityam/frontend-nanodegree-mobile-portfolio/commit/1d77fb72e4073515a59fc7a3c3955087e26e71f2)

1. optimize CSS delivery
  * inline CSS files

  related commits:  [e5990c6](https://github.com/tsekityam/frontend-nanodegree-mobile-portfolio/commit/e5990c68e396f359e4577d4e0a07c096f21fe154)

1. minify JavaScript
  * minify JavaScript being used in `pizza.html`

  related commits: [d68314e](https://github.com/tsekityam/frontend-nanodegree-mobile-portfolio/commit/d68314e4c9871a3a2cac58a679f709c388e04aab)

1. avoid forced synchronous layouts
  * avoid reading a constant value in a loop
  * simplify the way of getting the new pizza size

  related commits:
   [259a13](https://github.com/tsekityam/frontend-nanodegree-mobile-portfolio/commit/259a13054cbf2de17132287b305be703bb945577),  [ec2e243](https://github.com/tsekityam/frontend-nanodegree-mobile-portfolio/commit/ec2e243546faf5ebb6be7095b343b43e2c491635),  [8d6e79f](https://github.com/tsekityam/frontend-nanodegree-mobile-portfolio/commit/8d6e79f4333c87a334447aad645b18e0800fa26e)
