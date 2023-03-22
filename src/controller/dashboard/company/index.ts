import { NextFunction, Request, Response } from "express";
import company from "@/db/models/company";
import { Company } from "@/service/dashboard/company";

const createCompany = async (req: Request, res: Response, next: NextFunction) => {

    const companyData = req.body;

    const companyResponse = await Company(company, companyData);

    res.send(companyResponse)

}

export default {
    createCompany

}