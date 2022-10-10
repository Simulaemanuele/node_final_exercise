"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data");
const router = (0, express_1.Router)();
router.get('/categories', (req, res) => {
    res.send(data_1.categories);
});
router.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const category = data_1.categories.find((itm) => parseInt(id) === itm.id);
    if (category) {
        return res.send(category);
    }
    else {
        return res.status(404).send("Error: id doesn't exist or is invalid");
    }
});
router.post('/categories/category', (req, res) => {
    req.body = {
        id: 5,
        name: 'test2'
    };
    if (req.body) {
        data_1.categories.push(req.body);
        return res.status(201).json(req.body);
    }
    else {
        return res.status(400).send('Impossible to create resource');
    }
});
exports.default = router;
