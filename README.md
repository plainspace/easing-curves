# Static Starter

Project starter to spin up a static site when you don't need a js framework.

The scaffold includes:

#### The [Eleventy][1] static site generator

New, but it has a few things going for it including (1) the flexibility to choose from a ton of template languages and (2) it's written in JS, so there's no dependency on Ruby or Go.

- Compile Sass to CSS and process with [postcss]

- TODO: Decide on a scripts strategy. Do we use webpack, or simply concat files together?

- TODO: Images optimization with [imagemin]

- Live reloading and mobile mirroring with [browsersync]

## Installation

### The Easy Way

You can use [tpl] to quickly start a new project with this (or any other) scaffold from Github.

```sh
# install tpl
npm install -g @jmegs/tpl
# or
yarn global add @jmegs/tpl

# start your project
tpl jmegs/static-starter YOUR_PROJECT
```

### The Manual Way

1.  Clone the repo and clean up its git brain (remove my git repo and start a new blank one).

    ```sh
     # clone the repo without its full history.
     git clone --depth 1 https://github.com/jmegs/static-starter.git YOUR_PROJECT

     cd YOUR_PROJECT

     # remove existing git information and create a new repository.
     rm -rf .git && git init
    ```

## Getting Started

1.  Install dependencies. Grab a coffee. Breathe deeply.

    ```sh
    yarn
    # or npm install
    ```

2.  Start the development server. All changes will be processed and your site will automatically reload on http://localhost:3000

    ```sh
    yarn start
    # or npm start
    ```

3.  When you're done, build the project and deploy `dist/` somewhere awesome. I like [Netlify] and Zeit's [Now].

    ```sh
    yarn build
    # or npm run build
    ```

## Structure

- Pages and content live in `src` where they will be compiled by the static site generator.
- Any data files placed in `src/_data` will be available to all pages inside `src`
- CSS, JS, images, and fonts live in their own folders in `assets/` where they will be processed by gulp and placed lovingly into `dist`.
- Built output lives in `dist`

[1]: https://www.11ty.io/
[tpl]: https://github.com/jmegs/tpl
[postcss]: https://github.com/csstools/postcss-preset-env
[imagemin]: https://github.com/sindresorhus/gulp-imagemin
[browsersync]: https://browsersync.io/docs
[netlify]: https://www.netlify.com/
[now]: https://zeit.co/now
