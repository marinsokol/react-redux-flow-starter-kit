# React / redux (with Flow) Starter Kit

## Table of Contents
1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Running the Project](#running-the-project)
1. [Project Structure](#project-structure)
1. [Type Checking](#type-checking)
1. [Building for Production](#building-for-production)
1. [Deployment](#deployment)

## Requirements
* node `^5.0.0`
* yarn `^0.23.0` or npm `^3.0.0`

## Installation
```bash
$ git clone https://github.com/davezuko/react-redux-starter-kit.git <my-project-name>
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
|`build`            |Builds the application to ./dist|
|`test`             |Runs unit tests with Jest. See [testing](#testing)|
|`lint`             |[Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors|
|`lint:fix`         |Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix)|
|`flow`         |Runs [Flow](https://flow.org/en/docs/frameworks/react/) type checker. See [Type-checking](type-checking) |

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
