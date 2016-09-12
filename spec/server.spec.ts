import * as request from 'request';
import * as assert from 'assert';
import * as mongodb from 'mongodb';
import * as config from '../config';

// MONGO CONFIG
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectID;
const dbUrl = (config.dbUser && config.dbPwd) ? ('mongodb://' + config.dbUser + ':' + config.dbPwd + '@' + config.dbUrl) : ('mongodb://' + config.dbUrl);

const port = config.port;
const main_url = `http://localhost:${port}`;

describe("Landing page", function() {
  it("should return status code 200", function(done) {
    request(main_url, function (err, res, body) {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});