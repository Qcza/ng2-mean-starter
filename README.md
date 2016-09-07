# ng2-mean-starter
Starter for application based on MEAN stack with use of Angular 2

## MEAN ##
- MongoDB (https://www.mongodb.com/)
- Express (https://expressjs.com/)
- Angular 2 (https://angular.io/)
- NodeJS (https://nodejs.org/)

## CONFIG ##
MongoDB and files pathes configs could be set in *config.ts*

**Default config**

  // Mongo database URL
  export const dbUrl:string = 'localhost:27017/qcms';

  // Mongo database login
  export const dbUser:string = undefined;

  // Mongo database password
  export const dbPwd:string = undefined;

  // Images path
  export const imgPath:string = 'static/public/images/'; // default: 'static/public/images/'

  // Avatars path
  export const avtrPath:string = 'static/public/images/avatars/'; // default: 'static/public/images/avatars/'

  // Files path
  export const filePath:string = 'static/public/files/'; // default: 'static/public/files/'


## SEED ##
Database seed could be write in *helpers/sedd.ts*
Run seed with *npm run seed* command

## UNIT TESTS ##
Unit tests with use of jasmine should be add in *spec/* folder.
Unit test file name pattern: **.spec.ts*
Run unit tests with *npm test* command

## Additional packages ##
CSS framework 
- Bootstrap 4 (http://v4-alpha.getbootstrap.com/)

Fonts package and css
- Font Awesome (http://fontawesome.io/)

Additional ng2 packages
- ng-bootstrap (https://ng-bootstrap.github.io/#/home)
- ng2-cookies (https://github.com/BCJTI/ng2-cookies)
- ng2-uploader (https://github.com/jkuri/ng2-uploader)

Additional Express packages
- multer (https://github.com/expressjs/multer)
- body-parser (https://github.com/expressjs/body-parser)
- cors (https://github.com/expressjs/cors)

Additional packages
- bcrypt (https://github.com/ncb000gt/node.bcrypt.js)
- path (https://github.com/jinder/path)

## Dev packages ##
Unit tests
- jasmine-node (https://github.com/mhevery/jasmine-node)
- request (https://github.com/request/request)

SCSS / SASS
- node-sass (https://github.com/sass/node-sass)
- sass-lint (https://github.com/sasstools/sass-lint)

TypeScript
- typescript (https://github.com/Microsoft/TypeScript)
- typings (https://github.com/typings/typings)