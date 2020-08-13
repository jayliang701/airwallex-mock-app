# Airwallex Mock App
This is a mock website application for Airwallex frontend evalution.

## Table of contents
  * [Technologies/Tools](#technologies/tools)
  * [Prerequisites](#prerequisites)
  * [Develop](#develop)
  * [Test](#test)
  * [Production](#production)
  * [CDN](#cdn)
  * [Dockerized](#dockerized)

## Technologies/Tools
* React 16
* Typescript
* Mobx
* Sass
* Webpack 4
* Jest
* Enzyme
* Docker

## Prerequisites
* Node.js
* Docker client


## Develop
Download the project sources or clone the github repository, then install the npm dependencies.
```console
npm install
# yarn
```

Then run dev script to setup development env.
```console
npm run dev
```

Open broswer and navigate to the following address to preview the website.
```
http://localhost:8080
```

## Test
This project use Jest and Enzyme to test codes and React components.
Execute the following command to run a test.
```console
npm test
```

## Production
Execute the following command to build a dist for production.
```console
npm run build:prod
```

Then you can distribute the dist files to your server.

## CDN
For supporting CDN distribution, you can set a specific CDN url as prefix of all the assets url.
```console
cross-env PUBLIC_PATH=http://your-cdn-url/ npm run build:prod
# cross-env is a cross platform cli tool for setting env variables
```

## Dockerized
Execute the following command to build a dist for production and a docker image.
```console
npm run build:docker
```

docker image name is 
```
airwallex-mock-app:jay
```

Test the docker image on local.
```console
npm run test:docker
# or use docker cli directly:
# docker run -t -i -d --name app -p 8080:8080 airwallex-mock-app:jay
```

Then open broswer and navigate to the following address to preview the website.
```
# This is hosted by your docker image
http://localhost:8080
```

