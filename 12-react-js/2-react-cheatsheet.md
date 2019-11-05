# React CheatSheet

## How to start a React project without Create React App?

**Step 1**

Create a new `package.json` and init npm inside of the project folder

```javascript
  npm init -y
```

**Step 2**

Install `react` and `react-dom` packages from npm.

```javascript
  npm install react react-dom
```

**Step 3**

Create `.gitignore` files to ignore `node_modules` folder while using git.

`.gitignore` file:

```javascript
node_modules
.DS_Store // if you use a Mac
dist // Our production code will be bundles into dist folder so we also don't want dist folder to push our github / git.
```

**Step 4**

Create a folder which will be your main folder for `React` and `components`.

Create `index.js` and `index.css` files under the folder which you just created.

**`index.js`**:

```javascript
var React = require('react');
var ReactDOM = require('react-dom');
require('index.css');


class App extends React.Component {
  render() {
    return (
      <div>Hello World!~</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```

**Step 5**

Go to the terminal and run this code under the main folder (not the project folder itself)

```javascript
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin
```

**Step 6**

What `Webpack` does? 

Webpack's main responsibility is that it is a module bundler. An app is generally composed of multiple modules and what Webpack does that takes all of our modules and intelligently combines them into one single file or one single module that you can then reference inside of your `index.html` page 

Create `webpack.config.js` file under the project's root folder.

**`webpack.config.js`**:

```javascript
var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  }
}
```

We are indicating our entry point for Webpack. It is generally the main `App.js` file, in this case we called it `index.js`.

```javascript
entry: './app/index.js',
```

  Webpack will be look up through our entry file and then compose the bundles together and finally will create a bundle js file for production use. We tell the Webpack to where to create this JavaScript file and what it's will be called.

```javascript
path: path.resolve(__dirname, 'dist'),
filename: 'index_bundle.js'
```
