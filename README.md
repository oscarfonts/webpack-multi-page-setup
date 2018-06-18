# Webpack Multi Page Setup

Imagine you have a project consisting on several independent web pages.
Independent meaning not sharing the same javascript dependencies.

But you want to:
 * Use webpack to generate the `bundle.js` for each `page`. Parts of the webpack configuration will be common, but specific config for each page is also possible.
 * Still be able to share some code across them.
 * Compile (and debug) all the pages at once, with watch/hot-reload.

This repo illustrates a way to setup a project and webpack configuration to meet these goals.

## NPM tasks

* `npm run install-all`: Installs dependencies for all of the pages.
* `npm start`: Runs the webpack-dev-server with auto-reload capabilities.
* `npm run build`: Builds the bundles in production mode.

## Common configuration

* Place your shared code under the `shared/` directory. Import it as `import shared from "shared/example-shared"`.
* Install the devDependencies needed for bundling in the root folder (see the main `package.json` file).
* Webpack is run as "multi compiler". That is, a separate configuration is created for each of the stories, but they are run at once. The shared webpack configuration is generated in `webpack.config.js`.

## Specific configuration for each page

* The different pages are placed in subdirectories under `pages/`. For instance `pages/example-page/`. 
* You may add specific webpack configuration for a story in a file named `webpack-part.config.js`.
* By default, the source entry point will be `src/index.js`. By default, the target path is the page's base directory (no `dist/` subfolder). We recommend trying to keep these defaults across pages, although they can be overriden in specific webpack config.
* Each page has its own `package.json` file, so it can manage its own `node_modules`. Install specific page dependencies running `npm install` in the page's base directory.
