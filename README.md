# React / Redux (with Flow) Starter Kit

## Table of Contents
1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Running the Project](#running-the-project)
1. [Project Structure](#project-structure)
1. [Live development](#live-development)
1. [Async](#async)
1. [Type Checking](#type-checking)
1. [Deployment](#deployment)

## Requirements
* node `^5.0.0`
* yarn `^0.23.0` or npm `^3.0.0`

## Installation
```bash
$ git clone https://gitlab.com/marin.sokol/react-redux-serverless.git <my-project-name>
$ cd <my-project-name>
```
When that's done, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn  # Install project dependencies (or `npm install`)
```

## Running the Project
```bash
$ yarn start  # Start the development server (or `npm start`)
```
While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`start`            |Serves your app at `localhost:3050`|
|`build`            |Builds the application to ./public/dist|
|`test`             |Runs unit tests with Jest. See [testing](#testing)|
|`lint`             |[Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors|
|`lint:fix`         |Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix)|
|`flow`         |Runs [Flow](https://flow.org/en/docs/frameworks/react/) type checker. See [Type Checking](type-checking) |

## Project Structure

```
.
├── public                 # Static public folder containing build application
│   ├── dist                 # Folder containing production build js for application
│   └── index.html           # Main HTML page container for app
├── server                 # Express application that provides webpack middleware
│   └── app.js               # Server application entry point
├── src                    # Application source code
│   ├── app.js               # Application bootstrap and rendering
│   ├── components           # Global Reusable Components
│   ├── constants          # Constants important for whole application
│   │   └── actionTypes.js   # Declaration for all action types in application  
│   ├── epics              # Async side effects in Redux 
│   │   └── index.js         # Combines all epics for application
│   ├── layouts            # Components that dictate major page structure
│   │   └── index.js         # Global application layout in which to render routes          
│   ├── reducers           # Reducer registry and injection
│   │   └── index.js              
│   ├── routes               # Main route definitions and async split points
│   │   ├── index.js         # Bootstrap main application routes with store
│   │   ├── Home             # Fractal route
│   │   │   ├── index.js     # Route container
│   │   │   ├── components   # Presentational React Components
│   │   └── Game             # Fractal route
│   │       ├── index.js     # Game route definition (injects custom reducer to store)
│   │       ├── actions      # Actions for game route
│   │       ├── components   # Presentational React Components
│   │       ├── container    # Connect components to actions and store
│   │       ├── reducers     # Reducer for game route
│   │       └── types        # Types for game route
│   ├── store             # Create and instrument redux store  
│   │   └── index.js           
│   └── types             # Custom type for Flow
└── tests                    # Unit tests
```
## Live Development
### Hot Reloading

Hot reloading is enabled by default when the application is running in development mode (`yarn start`). This feature is implemented with webpack's [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) capabilities, where code updates can be injected to the application while it's running, no full reload required. 

### Redux DevTools

**We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn't require installing any packages in your project.

However, it's easy to bundle these developer tools locally should you choose to do so. First, grab the packages from npm:

```bash
yarn add --dev redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
```

Then follow the [manual integration walkthrough](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md).

## Async
This project uses [redux-observable](https://redux-observable.js.org) for async actions and creating side effects. Redux-observable is using 'epics' for that actions. Epics are functiona which takes a stream of actions and returns a stream of actions. Actions in, actions out. Like this:
```bash
const actionEpic = (action$) => action$;

const pingEpic = action$ =>
  action$.filter(action => action.type === 'PING')
    .delay(1000) 
    .mapTo({ type: 'PONG' });

// later you dispatch only 'PING' action
```
Your reducers will receive the original PING action and PONG action after 1s.

## Type Checking

This project uses [Flow](https://flow.org/) static type checker. Flow settings are defined in `.flowconfig`. By default, Flow ignores `__test__, config, node_modules, public, server` floders and checking ALL other .js files. If You are using VS Code, You can install [vscode-flow-ide](https://marketplace.visualstudio.com/items?itemName=gcazaciuc.vscode-flow-ide) to get live type checking and errors. You can also type check by running: 
```bash
$ yarn run flow
```

## Deployment
Out of the box, this starter kit is deployable by serving the `./public` folder generated by `yarn build`. This project does not concern itself with the details of server-side rendering or API structure. This makes it easy do deploy to service like [Firebase Hosting](https://firebase.google.com/docs/hosting/)

