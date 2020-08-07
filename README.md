# Proffy - Next Level Week

Project provided by [Rocket Seat](https://rocketseat.com.br/week/inscricao/11.0) to learn backend, frontend and mobile development employing React JS, React Native and Express.

[Proffy 2.0](https://www.notion.so/Vers-o-2-0-Proffy-eefca1b981694cd0a895613bc6235970#a8d95e60733641e7886c60538db860a2)

<div align="center">

<img src='https://res.cloudinary.com/lorransutter/image/upload/v1596832611/Proffy/Proffy.gif' alt="Site preview" height="300" />
<img src='https://res.cloudinary.com/lorransutter/image/upload/v1596833967/Proffy/Proffy_mobile.gif' alt="Mobile preview" height="300" />

</div>

This project aims to create a web application and mobile web app to connect teachers (**Proffys**) to students.

The web application is intended for the use of **Proffys** and students, where is possible to:

- Register yourself as a **Proffy** with name, avatar, whatsapp number, biography, subject, class cost and available times.
- It is also possible to search for available **Proffys** filtering by subject, week day and time.
- Found a Proffy, you can get in touch by whatsapp.

The mobile web app is indended for users that want to find **Proffys**, where is possible to:

- A student can search for available **Proffys** filtering by subject, week day and time.
- You can save a **Proffy** locally as favorite.
- You can visualize your list of favorites.
- Found a **Proffy**, you can get in touch by whatsapp.

## :runner: How to run

Open your terminal in the folder you want to clone the project

```sh
# Clone this repo
git clone https://github.com/LorranSutter/Proffy.git

# Go to the project
cd Proffy

# Go to each folder and install dependencies
cd backend
yarn

cd ../frontend
yarn

cd ../mobile
yarn
```

Now you will need two opened terminals to run the project. One for the backend and another one for the frontend or mobile.

Backend will run on http://localhost:5000/

Frontend will run on http://localhost:3000/

Mobile will run on http://localhost:19000/

```sh
# Go to backend
cd backend

# Run the project
yarn start

## In the another terminal ##

# Go to frontend
cd frontend

# Run the project
yarn start
```

For the mobile web app keep backend running and do the following:

```sh
# Go to mobile
cd mobile

# Run the project
expo start
```

This will start expo CLI on your browser. A QR code will appear on your screen and in terminal. You can scan this QR code with [Expo app](https://expo.io/tools#client) to see the application running in your phone.

## :book: Resources and technologies :computer:

1. Backend

   - [Typescript](https://www.typescriptlang.org/) - superset of JS programming language static typed
   - [TS node dev](https://www.npmjs.com/package/ts-node-dev) - monitor and restart server after changes
   - [Node.js](https://nodejs.org/en/) - executes JS scripts in server side
   - [Express.js](http://expressjs.com/) - web application framework
   - [Knex](http://knexjs.org/) - query builder
   - [Sqlite](https://www.sqlite.org/index.html) - simple SQL database engine
   - [Cors](https://www.npmjs.com/package/cors) - provides a middleware that can be used to enable Cross-origin resource sharing

2. Frontend

   - [ReactJS](https://reactjs.org/) - frontend library
   - [React router dom](https://www.npmjs.com/package/react-router-dom) - routing and navigation for react apps
   - [Axios](https://www.npmjs.com/package/axios) - HTTP requests

3. Mobile

   - [React Native](https://reactnative.dev/) - framework for mobile development
   - [Expo](https://expo.io/) - tool for helping mobile development with react native
   - [React Native Maps](https://github.com/react-native-community/react-native-maps) - map component for iOS and Android
   - [React Navigation](https://reactnavigation.org/) - routing and navigation for react native apps
   - [Expo Async Storage](https://docs.expo.io/versions/latest/sdk/async-storage/) - local key-value storage API
