# Sing Dashboard App (3.2.0 Seed version) with Angular 2.0 Final Release support


> An Angular 2 application featuring [Angular 2](https://angular.io)
 ([Router](https://angular.io/docs/js/latest/api/router/), [Forms](https://angular.io/docs/js/latest/api/forms/),
[Http](https://angular.io/docs/js/latest/api/http/),
 [TypeScript](http://www.typescriptlang.org/),
  [@types](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwjgjdrR7u_NAhUQ7GMKHXgpC4EQFggnMAI&url=https%3A%2F%2Fwww.npmjs.com%2F~types&usg=AFQjCNG2PFhwEo88JKo12mrw_4d0w1oNiA&sig2=N69zbO0yN8ET7v4KVCUOKA), 
  [TsLint](http://palantir.github.io/tslint/), 
  [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html), a
  nd [Webpack 2](http://webpack.github.io/) by [Flatlogic](http://flatlogic.com).
  
> This is a seed version of Sing App with Angular Final Release support. Full version release date is set to October 2, 2016.
Till then you can use a version of Sing App with Angular rc4 support available in seed and full versions.

This seed repo serves as an Angular 2 starter for anyone looking to get up and running with Angular 2 and TypeScript fast.
 Using a [Webpack 2](http://webpack.github.io/) for building our files and assisting with boilerplate. 
* Best practices in file and application organization for Angular 2.
* Unique to admin templates stylish and unobtrusive design
* Ready to go build system using Webpack for working with TypeScript.
* Angular 2 examples that are ready to go when experimenting with Angular 2.
* A great Angular 2 seed repo for anyone who wants to start their project.
* Type manager with @types
* Hot Module Replacement with Webpack and [@angularclass/hmr](https://github.com/angularclass/angular2-hmr) and [@angularclass/hmr-loader](https://github.com/angularclass/angular2-hmr-loader)

### Quick start
**Make sure you have Node version >= 5.0 and NPM >= 3**
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.ts`](/src/app/app.ts)

```bash
# change directory to our repo
cd sing/angular2-final-seed

# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Configuration](#configuration)
* [Contributing](#contributing)
* [TypeScript](#typescript)
* [@Types](#types)
* [Frequently asked questions](#frequently-asked-questions)
* [Support, Questions, or Feedback](#support-questions-or-feedback)
* [License](#license)


## File Structure
We use the component approach in Sing App. This is the new standard for developing Angular apps and a great way 
to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained 
app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class.
 Here's how it looks:
```
sing/angular2-final-seed/
 ├──config/                    * our configuration
 |   ├──helpers.js             * helper functions for our configuration files
 │   ├──webpack.dev.js         * our development webpack config
 │   ├──webpack.prod.js        * our production webpack config
 │
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──main.browser.ts        * our entry file for our browser environment
 │   │
 |   ├──index.html             * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts           * our polyfills file
 │   │
 |   ├──vendor.ts              * our vendor file
 │   │
 │   ├──app/                   * WebApp: folder
 │   │   └──app.ts             * App.ts: a simple version of our App component components
 │   │
 │   └──assets/                * static assets are served here
 │       ├──icon/              * our list of icons from www.favicon-generator.org
 │       ├──robots.txt         * for search engines to crawl your website
 │       └──humans.txt          * for humans to know who the developers are
 │
 │
 ├──tslint.json                * typescript lint config
 ├──typedoc.json               * typescript documentation generator
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──package.json               * what npm uses to manage it's dependencies
 └──webpack.config.js          * webpack main configuration file

```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.x.x`+ (or `v5.x.x`) and NPM `3.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do
 a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for
  you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) 

## Installing
* `npm install` to install all dependencies
* `npm run server` to start the dev server in another tab

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

# Configuration
Configuration files live in `config/`. We are currently using webpack.

# Types
> When you include a module that doesn't include Type Definitions inside of the module you can include external 
Type Definitions with @types

i.e, to have youtube api support, run this command in terminal: 
```shell
npm i @types/youtube @types/gapi @types/gapi.youtube
``` 
In some cases where your code editor doesn't support Typescript 2 yet or these types weren't listed in ```tsconfig.json```, 
add these to **"src/custom-typings.d.ts"** to make peace with the compile check: 
```es6
import '@types/gapi.youtube';
import '@types/gapi';
import '@types/youtube';
```

## Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with @types

```
npm install @types/node
npm install @types/lodash
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```

# Support, Questions, or Feedback
> Contact us anytime for anything about this Sing App or Angular 2 consulting.

* [Twitter: @Flatlogic](https://twitter.com/Flatlogic)
* [Email: contact@flatlogic.com](mailto:contact@flatlogic.com)

# License
[Wrapbootstrap licence](http://support.wrapbootstrap.com/knowledge_base/topics/usage-licenses).

Sing App 3.2.0 is based on [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter).
