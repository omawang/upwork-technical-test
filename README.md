# Getting Started with this project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Step 1 - Dependencies

You will need:

* [Git](http://git-scm.com/downloads)
* [node](https://nodejs.org/)
* [yarn](https://yarnpkg.com/en/docs/install) (Optional. Not Required if you use NPM)

Please install them if you don't have them already.

## Step 2 - Clone the repository:

From the command line, clone the repository:

```sh
$ git clone https://github.com/omawang/upwork-technical-test
```

then

```sh
cd upwork-technical-test
```

## Step 3 Install the dependencies

If you are using yarn run from the root of the repository:

```sh
yarn
```

If you are using npm, run from the root of the repository:

```sh
npm run install
```

## Step 4 - Run an app

Once the dependencies are installed, you can run the app by:

```sh
yarn start
# or
npm start
```

Your browser should open up to a running app.

## Troubleshooting

A few common problems:

### No articles found

If you deploy this project into production, the api key from NewsApi.org needs Business or Enterprise account. But if you are as Developer, it only works on your localhost. You can change the api key if you want at src/Pages/Home/Home.tsx:8. Can we move this constant into env variable? Yes, you can.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
