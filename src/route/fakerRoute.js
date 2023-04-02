import { Router } from "express";
import { faker } from "@faker-js/faker/locale/es_MX"

export const fakerRoute = Router();

fakerRoute.get("/", (req, res) => {
    let products = [];

    const fakerProducts = () => {
        for(let id = 1; id <= 5; id++) {
            let name = faker.commerce.product()
            let price = faker.commerce.price(100, 10000, 2, "$")
            let image = faker.image.food(300, 300, true)
            products.push({id, name, price, image})
        }
        return products;
    }
    fakerProducts();
    res.render("faker.handlebars", {products})
})