import * as mongodb from 'mongodb';
import * as assert from 'assert';
import * as bcrypt from 'bcrypt';

import * as config from '../config';

const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectID;
const dbUrl = (config.dbUser && config.dbPwd) ? ('mongodb://' + config.dbUser + ':' + config.dbPwd + '@' + config.dbUrl) : ('mongodb://' + config.dbUrl);

//SEEDS

// MongoClient.connect(dbUrl, function(err, db) {
//     assert.equal(null, err);
    
// });

