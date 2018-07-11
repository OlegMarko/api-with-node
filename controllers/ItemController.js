const Items = require('../models/Item');

exports.all = (req, res) => {
    Items.all((error, data) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ 'error': error });
        }

        res.status(200).json(data);
    });
};

exports.findByID = (req, res) => {
    const id = req.params.id;

    Items.findByID(id, (error, data) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ 'error': error });
        }

        res.status(200).json(data);
    });
};

exports.create = (req, res) => {
    const itemData = {
        name: req.body.name
    };

    Items.create(itemData, (error, data) => {
        if (error){
            console.log(error);
            return res.status(500).json({ 'error': error });
        }

        res.status(200).json(itemData);
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Items.update(id, {'name': req.body.name}, (error, data) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ 'error': error });
        }

        res.status(200).json(data);
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Items.delete(id, (error, data) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ 'error': error });
        }

        res.status(200).json(data);
    })
};
