"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_routes_1 = __importDefault(require("./routes/categories.routes"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const app = (0, express_1.default)();
app.use("/api", categories_routes_1.default, products_routes_1.default);
app.listen(3000, () => {
    console.log("[Server]: started at htpp://localhost:3000");
});
