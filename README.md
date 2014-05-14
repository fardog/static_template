Static Template
===============

A template for quickly creating static sites with Twitter Bootstrap, LESS, JADE, and Knockout JS.

Usage
-----

### Prerequisites

- Install [Git](http://git-scm.com/)
- Install [NodeJS](http://nodejs.org)
- Install [Bower](http://bower.io/) with `npm install -g bower`

### Setting up your project

1. Clone the source:  
`git clone https://github.com/fardog/static_template.git my_project_name`
2. Remove the git repo, and initialize a new one:  
`cd my_project_name && rm -rf .git && git init .`
3. Once your project is set up, install the necessary components:  
`npm install && bower install`

### Creating your site

The default Gruntfile will have you working with just a few files; you can always include more if necessary, but this template is designed for creating one-page sites with [Jade](http://jade-lang.com/), [LESS](http://lesscss.org/), [Knockout](http://knockoutjs.com/), and [RetinaJS](http://retinajs.com/).

The following files are relevant for creating a quick site:

- `src/index.jade` — Will be processed into your `index.html` file.
- `src/app.less` — The primary LESS which will be included in your `app.css` file, after Bootstrap's.
- `src/bootstrap/variables.less` — The variables file copies from Bootstrap, so you can customize any variables prior to Bootstrap being loaded.
- `src/bootstrap/bootstrap.less` — The include file copied from Bootstrap, so you can add/remove components as needed.
- `src/app.js` — Your primary Javascript file, which will be included in your `app.min.js` file after jQuery, Bootstrap, etc.

### Using the build scripts

> **Warning:** The build scripts will overwrite, without any sort of warning, all of the contents of the `/build/` and `/www/` directories. You should consider these directories to be volatile, and keep nothing in them. All files should come out of your `/src/` directory.

The following commands are available to you:

- `grunt dev` — Build the site in development mode, run a local server, and watch for changes. This will compile LESS to CSS and create your `index.html` file in the root of your project, which will link to your development javascript and compiled CSS files. If you make any changes to the contents of the `/src/` directory, it will trigger a reload on the development server, which runs on http://localhost:8002/
- `grunt deploy` — This will build your complete site in the `www` directory, including minimized CSS and Javascript which are ready for deployment. All files that are included in the `src/img/` directory will automatically be copied to their places in `www`.


The MIT License (MIT)
---------------------

Copyright (c) 2014 Nathan Wittstock

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
