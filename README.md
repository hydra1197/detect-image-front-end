## About
Project name: Entrance Exam for Engineering Role - Logical Fabrics Inc.

Hosting URL: https://image-detector-39d8c.firebaseapp.com

Library: **ReactJs** version 16.12.0

Description: This project allow user detect and extract information about entities in an image, across a broad group of categories by supplies a URL of an image. Detect result will be saved to the database.

## Run and build app
Run app in development environment

```
$ yarn run start
or
$ react-scripts start
```

Build app

```
$ yarn run build
or
$ react-scripts build
```

Run app in production environment
```
$ yarn global add serve
$ serve -s build
```

## Deploy app with firebase
```
$ npm install -g firebase-tools
$ firebase login
$ firebase init
```

- What do you want to use as your public directory? **build**
- Configure as a single-page app (rewrite all urls to /index.html)? **Yes**
- File build/index.html already exists. Overwrite? **No**

```
$ firebase deploy
```