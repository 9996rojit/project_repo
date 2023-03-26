export const CreateCart = async (model: any, data: any) => {
    const cartData = await model.create(data)
    return cartData


}

export const GetCart = async (model: any, id: any) => {
    const cartData = await model.findOne({ where: { cart_id: id } })
    return cartData
}