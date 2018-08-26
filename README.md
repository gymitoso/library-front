#Library Front

This is an angular project that consumes this API: https://bibliapp.herokuapp.com/explorer/. It also sends a file (txt and json) to https://github.com/gymitoso/library-middleware to add authors and books.

Check the file folder to see the format of the files to be sent.

## Requirements
- Node https://nodejs.org/en/
- Npm https://www.npmjs.com/
- Angular cli https://cli.angular.io/
- Docker https://www.docker.com/

## How to run
1. Clone this project
2. Run ```npm install```
3. Run ```ng serve```

## How to build in Docker
1. Clone this project
2. Run ```npm install```
3. Run ```ng build --prod --no-aot```
4. Run ```docker build -t library-front .```
5. Run ```docker run --restart=always -d -p 4200:4200 --name library-front library-front```

<strong>User: admin Password: admin</strong>

<strong>Don't forget to change middleware url in environments</strong>

## Bonus
- Jenkinsfile for build and send slack notifications.
- Sonar properties for Sonar analysis
