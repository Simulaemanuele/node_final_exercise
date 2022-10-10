import { Router } from "express";
import { categories } from "../data"

const router = Router();

router.get('/categories', (req, res) => {
    res.send(categories)
})

router.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const category = categories.find((itm) => parseInt(id) === itm.id)
    if (category) {
        return res.send(category);
    } else {
        return res.status(404).send("Error: id doesn't exist or is invalid");
    }

})

router.post('/categories/category', (req, res) => {
    req.body = {
        id: 5,
        name: 'test2'
    }

    if (req.body) {
        categories.push(req.body);

        return res.status(201).json(req.body)
    } else {
        return res.status(400).send('Impossible to create resource')
    }
})

export default router;