export const Company = async (model: any, companyData: any) => {
    const data = await model.create(companyData)
    return data


}
export const getCompany = async (model: any) => {


}