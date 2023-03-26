export const CreateCategory = async (model: any, data: any) => {
    const cData = await model.create(data);
    return cData

}

export const getAllCategory = async (model: any) => {
    const category = await model.findAll();

    return category


}