import { Request, Response } from 'express'
import cart from '@/db/models/cart'
import { CreateCart, GetCart } from '@/service/public/cart';

const createCart = async (req: Request, res: Response) => {
    const cartData = req.body;
    const data = await CreateCart(cart, cartData)
    res.send(data)
}

const getCart = async (req: Request, res: Response) => {
    const { id } = req.params;
    const cartData = await GetCart(cart, id)
    res.send(cartData)
}

export default {
    createCart,
    getCart

}