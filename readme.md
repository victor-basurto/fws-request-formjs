_**FWS Forms**_ Which Stands for **Federal Work Studies**

>This is a _SPA Form_ that students fill out when they have issues such as 

>_computer maintenance_, _class changes_, _communication to chairs_ and _classroom reservation_


**_To get started_**

Fork the repo and do the following:

_once you have the project, open git and navigate to the main path_ 

``$ npm install``

and then...

``$ bower install``

this will install all the components and dependencies that we need for this project

also, im going to leave here a detail explanation about gulp dependencies

```javascript
 "devDependencies": {
    "browser-sync": "^2.11.2",      // live css reloading
    "del": "^2.2.0",                // delete files and folders using globals
    "gulp": "^3.9.1",               // task runner
    "gulp-autoprefixer": "^3.1.0",  // to prefix our css
    "gulp-compass": "^2.1.0",       // adds compass - sass support
    "gulp-plumber": "^1.1.0",       // prevents pipes from breaking caused by errors from gulp plugins
    "gulp-rename": "^1.2.2",        // rename javascript files
    "gulp-uglify": "^1.5.3"         // minify files
  }
```
