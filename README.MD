# How to develop
- node must be installed
- after cloning run comman `npm install`
- for development purposes run command `npm run dev`
- then visit <http://localhost:3000>, app should be working, auto-reload too

# How to build and run production version
- for build run command `npm run build`
- for starting production version in windows:
 - run command `node node_modules/cross-env/dist/bin/cross-env.js PORT=8000 npm run start`
 - you can change PORT= to whatever
- for starting production version in unix-like systems:
 - configure package.json->scripts->start to `npm run start-unix`
 - run command `PORT=8000 npm run start`
 - you can change PORT= to whatever

# How to export and deploy static website to github pages
next build 
&& next export 
&& touch out/.nojekyll
&& git add out/ 
&& git commit -m \"Deploy Next.js to gh-pages\" 
&& git subtree push --prefix out origin gh-pages"