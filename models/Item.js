const ObjectID = require('mongodb').ObjectID;
const db = require('../db');

exports.all = (cb) => {
    db.get().collection('items').find().toArray((error, docs) => {
        cb(error, docs);
    })
};

exports.findByID = (id, cb) => {
    db.get().collection('items').findOne({ _id: ObjectID(id) }, (error, data) => {
        cb(error, data);
    });
};

exports.create = (itemData, cb) => {
    db.get().collection('items').insert(itemData, (error, data) => {
        cb(error, data);
    });
};

exports.update = (id, newValues, cb) => {
    db.get().collection('items').updateOne({ _id: ObjectID(id) }, { $set: newValues }, (err, data) => {
        cb(err, data);
    });
};

exports.delete = (id, cb) => {
    db.get().collection('items').deleteOne({ _id: ObjectID(id) }, (error, data) => {
        cb(error, data)
    });
};
