## Overview:
__Stack__ 

- node 4.3.2
- postgres


Boilerplate for building AWS lambda microservices.

The project is structured in a way that it can be ran as either lambda services or as a standalone node express app.

Uses swagger to generate function handlers and tests based on api spec.


## Getting started:

Create an .env file in the root of the folder containing the following variables

~~~
DB_USER=xxxxxxxxxxx
DB_PASSWORD=xxxxxxxxxxx
DB_NAME=xxxxxxxxxxx
AWS_ACCESS_KEY_ID=xxxxxxxxxxx
AWS_SECRET_ACCESS_KEY=xxxxxxxxx

// Only used for local development
SERVER_HOST=localhost
SERVER_PORT=3000
~~~

__Entry Point__

Lambda:

lambda.js

Node: 

server.js

## Scripts:

~~~
npm run [script]
~~~

__start:dev__:  
Starts the application on node express environment with nodemon for change watching.

__test__:  
Runs all test files that matches the test file paths.

__lint__:  
Runs eslint on all javascript files in the src folder.

__generate__:
Generates handlers and tests based on swagger yaml file.

__deploy__:  
Deploys the application to aws lambda.

__set-version__:
Sets the alias for the latest deployed lambda function.

__build:env__:  
Builds a .env file in the root of the folder. This is used for CircleCI builds.


## File Structure:

__Models__: src/models/\*\*/*.js

__Handlers__: src/handlers/\*\*/*.js

__Test__: src/tests/\*\*/*.test.js

Model files matching the file pattern are automatically initialized on server start.
Handlers are automatically routed by the swaggerize middleware.