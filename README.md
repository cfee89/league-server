# League Management Express API

Provides APIs for retrieving and adding leagues.

Dependencies:
- Node 14.16.1,
- Express 4.16.1,
- npm 6.14.12,
- yarn 1.22.10
- PostgreSQL 9.6
More dependency details are listed in package.json

Can use the following yarn commands:
- yarn runQuery<br>
  -Will create new DB table
- yarn test<br>
  -Kicks off mocha tests and provides coverage report. 'After' hook in setup.js will DELETE DB table
- yarn startdev<br>
  -Will start the application

