import express from "express";
import categoriesRoute from "./routes/categories.routes"
import productsRoute from "./routes/products.routes"

const app = express();

app.use("/api", categoriesRoute, productsRoute)


app.listen(3000, () => {
    console.log("[Server]: started at htpp://localhost:3000")
})