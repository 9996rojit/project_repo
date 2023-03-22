import permission from "@/db/models/permission";
import Type from "@/db/models/type";
import { createType, getAllType } from "@/service/admin/typeService";
import { NextFunction, Request, Response } from "express";

const AddType = async (req: Request, res: Response, next: NextFunction) => {
  const typeRequest = req.body;
  const typeData = await createType(Type, typeRequest)

  res.send(typeData)
}

const GetTypes = async (req: Request, res: Response, next: NextFunction) => {

  const typeData = await getAllType(Type, permission);
  res.send(typeData)


}



export default {
  AddType,
  GetTypes
}