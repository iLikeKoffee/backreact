#**React**(with **JSX**) + **Backbone** + **Require** project snippet.

Building of project is managed with **grunt**, testing with **karma** and **Jasmine**.

## List of production dependencies
* backbone ~1.1.2
* bootstrap ~3.3.2
* jquery ~2.1.3
* react.backbone ~0.6.0
* react ~0.12.2
* requirejs ~2.1.15

## List of development dependencies
* grunt
* grunt-concat-css
* grunt-contrib-clean
* grunt-contrib-concat
* grunt-contrib-connect
* grunt-contrib-jshint
* grunt-jsxhint
* jshint-stylish
* grunt-contrib-less
* grunt-lesslint
* grunt-contrib-watch
* grunt-react
* karma
* jasmine-core
* karma-jasmine
* grunt-karma
* karma-chrome-launcher
* requirejs
* karma-requirejs
* react-tools
* npm

## Implemented grunt commands
* `grunt`, `grunt serve` - start connect server and rebuild project on every change.
* `grunt lint` - check code style of .js, .jsx, .less files.
* `grunt clean` - remove all build results.
* `grunt build` - build project(clean, then lint, then compile less and jsx, then run all tests).
* `grunt test` - run project tests.

## Examples
* app/scripts/router.js - Routing file.
* app/scripts/ui-components/src/panel/panel.jsx - example of defining UI component.
* app/scripts/controllers/src/*.jsx - example of defining controllers.
* test/ui-test/panel.test.js - example of testing react components.

## Plans
* Write controllers test example.
* Implement yoman scaffolding.
* Implement writing ui-tests in .jsx syntax.
* Implement `grunt dist` command to minify all code and build ready-to-deploy distribution.