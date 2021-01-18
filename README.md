# image-upload-api
An api to handle requests from the UI and manage image storage in the psql database.
Part of an app that allows drag and drop images or browsed files to be added to a database hosted by aws.

The image upload app was built with Node.js Express, AWS and React uses PSQL and Sequelize ORM.

## Video demo of api in progress;

https://www.youtube.com/watch?v=QjrhOGOCDSM
[Youtube](https://www.youtube.com/watch?v=QjrhOGOCDSM)

![image-uplod-api screenshot](/resources/image-uploade-ui-active.png)

The repo is linked to  [https://github.com/JCON3DEV/image-upload-ui](https://github.com/JCON3DEV/image-upload-ui) which was bootstrapped from Create React App.

## Dependancies

Node.JS -> Nodemon / express / [scripts-dev](https://www.npmjs.com/package/scripts-dev)
(scripts-dev is a small package for doing some task when we are developing node apps. It provides three scrips that we can use in our package.json)

PG node-postgres
and 
[PG-hstore](https://www.npmjs.com/package/pg-hstore)
(A node package for serializing and deserializing JSON data to hstore format)

sequelize-cli (The Sequelize Command Line Interface (CLI))

path - (path module provides utilities for working with file and directory paths. It can be accessed using:
	const path = require('path'); )

fs - (The Node.js file system module allows you to work with the file system on your computer. CRUD)

## image-uploader-ui dependancies
Multer - (Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.)
body-parser - (Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.) - Consider validation techniques to prevent string injection
sharp - (The typical use case for this high speed Node.js module is to convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP and AVIF images of varying dimensions.)
UUID - (creates of RFC4122 UUIDs)
cors - (providing an Express middleware that can be used to enable CORS with various options.)

react-dropzone-uploader - (React Dropzone Uploader is a customizable file dropzone and uploader for React. To handle image input.)
react-image-gallery - (a React component for building image galleries and carousels)

## directions;
clone or fork the repos
cd into the directory.
In order to run type: $ npm install

## To start;
### In terminal from image-uploader-api type; $ npm run dev
; http://localhost:8000/api/health


### in terminal from image-uploader-ui type: $ npm start
This will run the ui on localhost3000


(On my Network also:  http://10.0.0.132:3000)


