import UserError from "@/utils/error/UserError"

interface ITYPE {
  name: string | undefined,
  permission_id: number | undefined

}

export const createType = async (type: any, info: ITYPE) => {
  const dbData = await type.create(info)

  if (dbData) {
    return "Type Created Successfully"
  } else {
    throw new UserError("Failed to create type", "Type")
  }

}