# How to develop
- node must be installed
- install packages - run command `yarn install` or `npm install`
- start application - run command `yarn dev` or `npm run dev`
- then visit <http://localhost:3000>, app should be working, auto-reload too

# How to build and run production version
- install packages - run command `yarn install` or `npm install`
- build application - run command `yarn build` or `npm run build`
- start application - run command `yarn start` or `npm start`

# How to export and deploy static website to github pages
next build 
&& next export 
&& touch out/.nojekyll
&& git add out/ 
&& git commit -m \"Deploy Next.js to gh-pages\" 
&& git subtree push --prefix out origin gh-pages"