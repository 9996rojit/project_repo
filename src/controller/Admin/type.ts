import Type from "@/db/models/type";
import { createType } from "@/service/admin/typeService";
import { NextFunction, Request, Response } from "express";

const AddType = async (req: Request, res: Response, next: NextFunction) => {
  const typeRequest = req.body;
  const typeData = await createType(Type, typeRequest)

  res.send(typeData)
}

export default {
  AddType
}