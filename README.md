# Polymer Hacker News client

Very basic Hacker News [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) client made with [Polymer 2](https://www.polymer-project.org).


<p align="center">
  <a href="https://hn-polymer-2.firebaseapp.com" rel="noopener" target="_blank">
    <img alt="Demo Screenshot" src="hn-polymer.png" height="500">
  <br>
  Try the Demo!
  </a>
</p>

# Performance
- Lighthouse [92/100](https://www.webpagetest.org/lighthouse.php?test=170516_F6_82399308fdbe29d39cd297ee0960a062&run=3)
- Interactive (Emerging Markets) [2.7s](https://www.webpagetest.org/result/170516_F6_82399308fdbe29d39cd297ee0960a062/)
- Interactive (Faster 3G) [2.0s](https://www.webpagetest.org/result/170516_WW_6bbab2960100313ae75052346ca7efad/)

# Features
## Progressive Web App
- Uses Service Worker to cache data and work offline
- App Manifest for installing to homescreen

## Polymer CLI
hn-polymer-2 was created by using the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli), a collection of tools to make building Web Components and Polymer apps easier.

Using [Polymer Starter Kit](https://github.com/PolymerElements/polymer-starter-kit) template provided by the CLI made following the PRPL pattern easy from the start.
## PRPL pattern
The PRPL pattern, in a nutshell:

- **Push** components required for the initial route using http2 and Server Push
- **Render** initial route ASAP
- **Pre-cache** components for remaining routes using Service Worker
- **Lazy-load** and progressively upgrade next routes on-demand

## Firebase
[Firebase](https://firebase.google.com/docs/hosting/) provides easy http2-enabled static hosting, a real-time database, server [functions](https://firebase.google.com/docs/functions/), and edge-caching all over the globe.

# Setup
1. Install polymer-cli globally
    ```
    npm install -g polymer-cli
    ```

1. Install the dependencies
    ```
    npm install
    ```
1. Serve the development version
    ```
    polymer serve
    ```
1. (Optional) Enable firebase function based HN API proxy
    - Edit `sw-precache-config.js`
    - Edit `src/hn-app.html`
1. Build
    ```
    polymer build
    ```
1. Test deployment
    ```
    polymer serve build/es5-bundled
    ```
1. Deploy after setting up a firebase project
    ```
    firebase deploy
    ```

# TODOs
- use firebase functions to differentially serve for polyfills
- use firebase functions to push route data for all pages, not just main routes
- use official HackerNews Firebase API to support realtime updates
- Automate using firebase function API proxy when deploying

# License
BSD-3-Clause
