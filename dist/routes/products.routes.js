"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data");
const router = (0, express_1.Router)();
router.get('/products', (req, res) => {
    res.send(data_1.products);
});
router.post("/products/product", (req, res) => {
    req.body = {
        id: 9,
        name: "Prodotto di prova",
        img: "http://placeholder.com/",
        category_id: 2,
    };
    if (data_1.categories.find((item) => item.id === req.body.category_id)) {
        data_1.products.push(req.body);
        return res.status(201).json(req.body);
    }
    else
        return res.status(400).send("Wrong category");
});
exports.default = router;
