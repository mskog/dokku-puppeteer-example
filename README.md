# dokku-puppeteer-example
An example app with Node.js, Express.js, [Puppeteer](https://github.com/GoogleChrome/puppeteer) and Chrome Headless.

>Puppeteer is a Node library which provides a high-level API to control headless Chrome over the DevTools Protocol. It can also be configured to use full (non-headless) Chrome.

By using Puppeteer and Express.js you can easily create endpoints to do all sorts of things like scrape web sites(and execute Javascript). Dokku makes deploying these services a breeze, so it's a good fit.

Chrome headless requires additional packages to be installed so it will not work with a default Dokku installation. Fear not, as it is quite simple to fix by using the excellent dokku-apt plugin. Simply follow the instructions below and you'll be scraping sites in minutes!

# Installation

The installation instructions assume Dokku version >=0.7

1. (On your development machine). Clone the project: `git clone https://github.com/mskog/dokku-puppeteer-example`

1. (On your server) Install Dokku http://dokku.viewdocs.io/dokku/getting-started/installation/#1-install-dokku

2. (On your server) Puppeteer/Chrome needs additional packages to be installed in the Docker containers in order to get Chrome running. To do this you need the dokku-apt plugin for Dokku. Follow the instructions at https://github.com/F4-Group/dokku-apt

3. (On your server). Create your application: `dokku apps:create <YOUR_APP_NAME>`

4. (On your development machine). Add dokku to your git remotes: `git remote add dokku dokku@<YOURSERVER>:<YOUR_APP_NAME>`

5. (On your development machine). `git push dokku master`

Dokku will now build the containers and launch your application. This will take a while. By the end it will give you the URL to your app. Visit that url and it should give you the Google search results for "test"
