import { Router } from "express";
import { categories, products } from "../data";

const router = Router();

router.get('/products', (req, res) => {
    res.send(products);
});

router.post("/products/product", (req, res) => {
    req.body = {
        id: 9,
        name: "Prodotto di prova",
        img: "http://placeholder.com/",
        category_id: 2,
    };

    if (categories.find((item) => item.id === req.body.category_id)) {
        products.push(req.body)
        return res.status(201).json(req.body);
    } else
        return res.status(400).send("Wrong category");
});

export default router;