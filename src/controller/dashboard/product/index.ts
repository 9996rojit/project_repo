import { Request, Response } from "express";
import product from "@/db/models/product";
import { CreateProduct, GetAllProduct } from "@/service/dashboard/product";
import productVarient from "@/db/models/product_varient";
import productDetails from "@/db/models/product_details";

const db = require('@/helper/databaseConnector');

const createProduct = async (req: Request, res: Response) => {
    const info = req.body
    const productData = await CreateProduct(db, product, productDetails, productVarient, info)
    res.send(productData)

}

const getProducts = async (req: Request, res: Response) => {
    const data = await GetAllProduct(product);

    res.send(data)
}

export default {
    createProduct,
    getProducts
}