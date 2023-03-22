
import UserError from "@/utils/error/UserError"

interface ITYPE {
  name: string | undefined,
  permission_id: number | undefined
}

export const createType = async (type: any, info: ITYPE) => {
  const dbData = await type.create(info)

  if (dbData) return "Type Created Successfully"
  throw new UserError("Failed to create type", "Type")

}

export const getAllType = async (type: any, permission: any) => {
  const types = await type.findAll({
    attributes: ['name', 'createdAt'],
    include: [{
      model: permission,
      attributes: ['name', 'permission', 'permission_id']
    }]
  });

  return types
}