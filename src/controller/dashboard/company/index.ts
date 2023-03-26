import { Request, Response } from "express";
import company from "@/db/models/company";
import { Company, createAllProfile, getCompany, getUserProfile } from "@/service/dashboard/company";
import profile from "@/db/models/profile";
import { getFileName } from "@/helper/imageUploader";

const createCompany = async (req: Request, res: Response) => {

    const companyData = req.body;

    const companyResponse = await Company(company, companyData);

    res.send(companyResponse)

}

const getAllCompany = async (req: Request, res: Response) => {
    const companyData = await getCompany(company)
    res.send(companyData)

}

const createProfile = async (req: Request, res: Response) => {
    const { UserId } = req.body
    const image: any = req.files

    // eslint-disable-next-line radix
    const finalData = { UserId: parseInt(UserId), profile_image: getFileName(image.profile_image[0]?.path), cover_image: getFileName(image.cover_image[0].path) }
    const Profile = await createAllProfile(profile, finalData)
    res.send(Profile)
}

const getProfileById = async (req: Request, res: Response) => {

    const { id } = req.params

    const profileData = await getUserProfile(profile, id);

    res.send(profileData)




}

export default {
    createCompany,
    getAllCompany,
    createProfile,
    getProfileById

}