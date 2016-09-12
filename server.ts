import * as express from 'express';
import * as path from 'path';
import * as mongodb from 'mongodb';
import * as assert from 'assert';
import * as bodyParser from 'body-parser';
import * as bcrypt from 'bcrypt';
import * as multer from 'multer';
import * as cors from 'cors';
import * as fs from 'fs';

import * as config from './config';

// MONGO CONFIG
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectID;
const dbUrl = (config.dbUser && config.dbPwd) ? ('mongodb://' + config.dbUser + ':' + config.dbPwd + '@' + config.dbUrl) : ('mongodb://' + config.dbUrl);

// BCRYPT CONFIG
const saltRounds:number = 8;

// MULTER CONFIG
// AVATARS
const avtrUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, config.avtrPath)
    },
    filename: (req, file, cb) => {
      let ext = path.extname(file.originalname);
      cb(null, `${Math.random().toString(36).substring(7)}${ext}`);
    }
  })
});
// IMAGES
const imgUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, config.imgPath)
    },
    filename: (req, file, cb) => {
      let ext = path.extname(file.originalname);
      cb(null, `${Math.random().toString(36).substring(7)}${ext}`);
    }
  })
});
// FILES
const fileUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, config.filePath)
    },
    filename: (req, file, cb) => {
      let ext = path.extname(file.originalname);
      cb(null, `${Math.random().toString(36).substring(7)}${ext}`);
    }
  })
});

// EXPRESS
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ 
  extended: false
}));
app.use(bodyParser.json())

app.use('/', express.static(__dirname));
app.use('/css', express.static(__dirname + '/app/styles/')) // STYLES
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/')); // BOOTSRTAP CSS
app.use('/css', express.static(__dirname + '/static/font-awesome/css/')); // FONT AWESOME CSS
app.use('/fonts', express.static(__dirname + '/static/font-awesome/fonts/')); // FONT AWESOME FONTS
app.use('/img', express.static(__dirname + '/' + config.avtrPath)); // AVATARS
app.use('/img', express.static(__dirname + '/' + config.imgPath)); // IMAGES
app.use('/files', express.static(__dirname + '/' + config.filePath)); // FILES

// app.get('/', function (req: express.Request, res: express.Response) {
//     res.sendFile(path.resolve(__dirname, ' index.html'));
// });

// 
// ROUTING
// app.post('/', function (req: express.Request, res: express.Response) {
  
// })

// app.put('/', function (req: express.Request, res: express.Response) {
  
// })

// app.get('/', function (req: express.Request, res: express.Response) {
  
// })

// app.delete('/', function (req: express.Request, res: express.Response) {
  
// })


app.listen(config.port);