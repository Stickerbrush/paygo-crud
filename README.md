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

This repository is split into two parts:
First we have the Backend folder, where all the source code for the django backend resides.
Then the Frotend folder, where the react project is located.


For the react project the most important files and folders:

`src/` folder that contains the main files of the project__
`public/` react offers this folder to contain static files. If we look inside this folder, we have the index.html which is the main file and a set of files that are related to it.__
`package.json`__
  
Inside `src/` we can observe multiple files such as `index.js, App.js and index.css`. The first one is the most important one, it takes the `App.js` file that contains the whole application and renders it into the `index.html`. \
On the other hand, `index.css`, implements global styles.

And for the django project the most important files and folders:

`app/` contains the main settings files and urls for the backend engine__
`oauth/` contains all the logic related to the user authentication, as well as the endpoint for login__
`staticfiles/` has all the static content that makes the API pages look nice (i.e swagger styles, and the default DRF styles) when deployed__
`users/` contains all the business logic related to employees, as well as the endpoint for querying user data__
`utils/` has several utility functions used for Http requests, handling error messages, etc.__



 
 
 ## Most important libraries used
 
