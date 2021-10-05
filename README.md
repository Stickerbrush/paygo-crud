# Getting Started with PayGo CRUD Project

  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
PayGo is a business application that offers basic read functionalities for employee data. 

It runs on a Django API backend that can be tested at https://paygotestbackend.herokuapp.com/ and a React Js client that can be tested at https://paygotest.herokuapp.com/

## Testing Locally

In order to run it, pull this repository and go to main folder. Be sure you're using Node.js version 14 (specific version used for this Project was **14.17.5**  [NVM node manager.](https://github.com/nvm-sh/nvm)) Inside the project directory `shopbridge/`, run the following commands to install dependencies:


### `npm install`
  

After installing dependencies, run the app in the development mode with:

  

### `npm start`  

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. If changes are made to the app code, the page will reload.
  
  
Running the client locally should still work, as the fetch URLs are pointing towards the hosted django backend on Heroku

## About the Project

This repository is split into two parts:
First we have the Backend folder, where all the source code for the django backend resides.
Then the Frotend folder, where the react project is located.


For the react project the most important files and folders:

`src/` folder that contains the main files of the project<br />
`public/` react offers this folder to contain static files. If we look inside this folder, we have the index.html which is the main file and a set of files that are related to it.<br />
`package.json`<br />
  
Inside `src/` we can observe multiple files such as `index.js, App.js and index.css`. The first one is the most important one, it takes the `App.js` file that contains the whole application and renders it into the `index.html`. \
On the other hand, `index.css`, implements global styles.

And for the django project the most important files and folders:

`app/` contains the main settings files and urls for the backend engine<br />
`oauth/` contains all the logic related to the user authentication, as well as the endpoint for login<br />
`staticfiles/` has all the static content that makes the API pages look nice (i.e swagger styles, and the default DRF styles) when deployed<br />
`users/` contains all the business logic related to employees, as well as the endpoint for querying user data<br />
`utils/` has several utility functions used for Http requests, handling error messages, etc. <br />
 
 
 ## Most important libraries used

For React:

- Reactstrap: For component styles <br />
- Axios: For fetching data from the API endpoints <br />
- jsonwebtoken: For login token management <br />

For Django:
- Django-Rest-Framework: To develop the API 
- Pandas: For loading the csv file into the database
- SQLite 3: The database engine of choice
- Yasg: Yet another swagger generator, for documenting the API

Special mention to Gunicorn and Whitenoise, two libraries needed to deploy a django API app to Heroku





