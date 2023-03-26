import { Request, Response, NextFunction } from "express";
import { createPermission, getPermission } from "@/service/admin/permissionService";
import permission from "@/db/models/permission";


const AddPermission = async (req: Request, res: Response, next: NextFunction) => {
  const permissionData = req.body;

  const permissionRequest = await createPermission(permission, permissionData)
  res.send(permissionRequest)
}

const getAllPermissions = async (req: Request, res: Response, next: NextFunction) => {

  const permissions = await getPermission(permission);

  res.send(permissions)


}

export default {
  AddPermission,
  getAllPermissions
}