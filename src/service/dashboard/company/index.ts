export const Company = async (model: any, companyData: any) => {
    const data = await model.create(companyData)
    return data


}
export const getCompany = async (model: any) => {
    const companyData = await model.findAll();

    return companyData

}

export const createAllProfile = async (model: any, info: any) => {
    console.log("🚀 ~ file: index.ts:15 ~ createAllProfile ~ info:", info);
    const createProfile = await model.create(info);
    return createProfile
}

export const getUserProfile = async (model: any, id: string) => {
    const userProfile = await model.findOne({ where: { profile_id: id } })
    return userProfile


}