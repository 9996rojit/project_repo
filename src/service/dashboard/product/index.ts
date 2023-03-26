
// eslint-disable-next-line consistent-return
export const CreateProduct = async (db: any, model: any, model1: any, model2: any, productData: any) => {
    const t = await db.sequelize.transaction();
    try {
        const { product, varient, detail } = productData
        const data = await model.create(product, { transaction: t });
        const pDetail = await model1.create({ productId: data.id, ...detail }, { transaction: t });
        const pVarient = await model2.create({ productId: data.id, ...varient }, { transaction: t })

        await t.commit()
        return { ...data, ...pDetail, ...pVarient }
    } catch (error) {
        console.log(error)
        await t.rollback()
    }

}


export const GetAllProduct = async (model: any) => {
    const products = await model.findAll();
    return products
}