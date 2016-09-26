# ng2-mean-starter
[![dependencies Status](https://david-dm.org/Qcza/ng2-mean-starter/status.svg)](https://david-dm.org/Qcza/ng2-mean-starter)
[![devDependencies Status](https://david-dm.org/Qcza/ng2-mean-starter/dev-status.svg)](https://david-dm.org/Qcza/ng2-mean-starter?type=dev)

Starter for application based on MEAN stack with use of Angular 2.


## MEAN ##
- MongoDB (https://www.mongodb.com/)
- Express (https://expressjs.com/)
- Angular 2 (https://angular.io/)
- NodeJS (https://nodejs.org/)

## Installation ##
> npm install

**Compile TypeScript**
> npm run tsc

**Compile SASS**
> npm run sass

## Starting app ##
**Starting with TS and SASS watchers**
> npm start

**Starting without TS and SASS compilers**
> npm run server

## Config ##
MongoDB accesses and files paths could be configured in `config.ts`

**Default config**
```typescript
// Mongo database URL
export const dbUrl:string = 'localhost:27017/test';

// Mongo database login
export const dbUser:string = undefined;

// Mongo database password
export const dbPwd:string = undefined;

// Images path
export const imgPath:string = 'static/public/images/';

// Avatars path
export const avtrPath:string = 'static/public/images/avatars/';

// Files path
export const filePath:string = 'static/public/files/';

// Port
export const port:number = process.env.PORT || 3000;
```

## Seed database ##
Database seed could be write in `helpers/seed.ts`

Run seed with `npm run seed` command

## Unit tests ##
Unit tests with use of [Jasmine](http://jasmine.github.io/) should be added in `spec/` folder.

Unit test file name pattern: `*.spec.ts`

Run unit tests with `npm test` command

## Create new component ##
To create new component you can run bash script `./newcomponent.sh <name>` from main directory

It should create files:
```
app/components/<name>.component.ts
app/templates/<name>.component.html
app/styles/sass/<name>components.sass
```

## Used additional packages ##
CSS framework 
- Bootstrap 4 (http://v4-alpha.getbootstrap.com/)

Icons package
- Font Awesome (http://fontawesome.io/)

Additional ng2 packages
- ng2-cookies (https://github.com/BCJTI/ng2-cookies)
- ng2-uploader (https://github.com/jkuri/ng2-uploader)
- ng-bootstrap (https://ng-bootstrap.github.io/)

Additional Express packages
- multer (https://github.com/expressjs/multer)
- body-parser (https://github.com/expressjs/body-parser)
- cors (https://github.com/expressjs/cors)

Additional packages
- bcrypt (https://github.com/ncb000gt/node.bcrypt.js)
- path (https://github.com/jinder/path)
- lodash (https://github.com/lodash/lodash)

## Used additional dev packages ##
Unit tests
- jasmine-node (https://github.com/mhevery/jasmine-node)
- request (https://github.com/request/request)

SCSS / SASS
- node-sass (https://github.com/sass/node-sass)
- sass-lint (https://github.com/sasstools/sass-lint)

TypeScript
- typescript (https://github.com/Microsoft/TypeScript)
- typings (https://github.com/typings/typings)