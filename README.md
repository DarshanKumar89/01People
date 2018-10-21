# 01People

<!-- ![logos](https://image.ibb.co/m8S9ew/react_redux_sass.jpg) -->

# React, Redux & Sass - Task

A simple and quick way to get you going with developing React applications with Redux and Sass.

**Code:**

For a complex example with Async actions, take a look at: [react-redux](https://github.com/DarshanKumar89/01People)

### Components 🔩 Styles 🎨 Action! 🎬

All the required code (JS + Sass) goes inside the `src` folder. Webpack will compile, bundle and output in the `public` folder, which you can upload/deploy to the root directory of your web server to publish your app!

**API ISSUes:**

```
1. The API Given [ https://jsonplaceholder.typicode.com/] Used to Add post- does add post but the server endpoint doent Update

2. So i just made a work around so it looks like faking but it fakes by removing the post
```

### Get started!

```
git clone
cd 01People
npm i
```

### Start the dev server:

```
npm run start:dev
```

### Build:

```
npm run build
```

#### Note:

- Changes made to your CSS / JS triggers a full page auto-reload.
- Running a build writes the `bundle.js` and `bundle.css` to the `/public/dist/` directory.

### Pre-configured tools and plugins

- Module bundler: [Webpack](https://webpack.js.org/)
- ES6 Transpiler: [babel-loader](https://github.com/babel/babel-loader)
- Linting: [eslint](https://eslint.org/)
- JS Uglification: [UglifyJsPlugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/)
- Dev Server: [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (`npm run start:dev`)

#### Codebase overview.

```
/
├─ public/
|  ├─ dist/
|  |  ├─ bundle.css           # CSS that's generated from SASS
|  |  ├─ bundle.js            # Contains scripts of components & vendor(s).
|  ├─ index.html              # Contains root element to mount your app.
└─ src/
   ├─ actions/                # Create actions here.
   |  ├─ counterActions.js
   ├─ components/             # Create components here
   |  ├─ ViewPost.js
   |  ├─ AddPost.js
   |─ containers/             # Containers bridge Components with the State.
   |  ├─ PostContainer.js
   ├─ constants/              # Define action types here.
   |  ├─ ActionTypes.js
   ├─ reducers/               # Create reducers here.
   |  ├─ counter.js
   |  ├─ index.js             # Combine your reducers here.
   ├─ styles/                 # All styling goes here.
   |  ├─ main.scss
   ├─ App.js                  # Include your main component(s).
   ├─ index.js                # Passes state to App. Renders markup to DOM.
   └─ store.js                # Creates and exports store.
```

#### Libraries used

**React** - [Quick Start](https://reactjs.org/docs/hello-world.html)

**Redux** - [Basics](https://redux.js.org/docs/basics/)

**Sass** - [Sass Guide](http://sass-lang.com/guide)

**Axios** - [Axios Usage](https://www.npmjs.com/package/axios)

#### The MIT License (MIT), Apache License

MIT © 2017 Darshan Kumar
