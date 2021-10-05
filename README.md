# Getting Started with PayGo CRUD Project

  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
PayGo is a business application that offers basic read functionalities for employee data. It can be tested at https://paygotest.herokuapp.com/
It runs on a Django API backend that can be tested at https://paygotestbackend.herokuapp.com/  

## Testing Locally

In order to run it, pull this repository and go to main folder. Be sure you're using Node.js version 14 (specific version used for this Project was **14.17.5**  [NVM node manager.](https://github.com/nvm-sh/nvm)) Inside the project directory `shopbridge/`, run the following commands to install dependencies:


### `npm install`
  

After installing dependencies, run the app in the development mode with:

  

### `npm start`  

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. If changes are made to the app code, the page will reload.
  

## About the Project

  

The main files are as follows:

`src/` folder that contains the main files of the project
`public/` react offers this folder to contain static files. If we look inside this folder, we have the index.html which is the main file and a set of files that are related to it.
`package.json`

  
Inside `src/` we can observe multiple files such as `index.js, App.js and index.css`. The first one is the most important one, it takes the `App.js` file that contains the whole application and renders it into the `index.html`. \
On the other hand, `index.css`, implements global styles.

