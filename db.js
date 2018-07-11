const MongClient = require('mongodb').MongoClient;

let state = {
    db: null
};

exports.connect = (url, dbName, done) => {
    if (state.db) {
        return done();
    }

    MongClient.connect(url, (error, db) => {
        if (error) {
            return done(error);
        }

        state.db = db.db(dbName);
        done();
    });
};

exports.get = () => {
    return state.db;
};
