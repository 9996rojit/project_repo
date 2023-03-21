import Error404 from "@/utils/error/404Error"
import UserError from "@/utils/error/UserError"

interface IPERMISSION {
  name: string | undefined,
  permission: any

}

export const createPermission = async (permission: any, info: IPERMISSION) => {
  const permissionRequest = await permission.create(info)
  if (permissionRequest) {
    return "Permission created successfully"

  } else {
    throw new UserError("Failed to create permission", "permission")
  }
}

export const getPermission = async (permission: any) => {

  const allPermission = await permission.findAll();
  console.log("🤫🤫🤫 ~ file: index.ts:23 ~ getPermission ~ allPermission:", allPermission)
  if (allPermission) {
    return allPermission
  }
  else {
    throw new Error404("No permissions found", 'permission');
  }

}

