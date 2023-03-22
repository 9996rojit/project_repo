import { Op } from 'sequelize'
import Error404 from '@/utils/error/404Error'
import errors from '@/Error'
import UserError from '@/utils/error/UserError'

const bcrypt = require('bcryptjs')

interface IUSER {
    email?: string | undefined
    password: string | undefined
    contactNumber?: string | undefined
}

interface IUSERREGISTER extends IUSER {
    firstname: string | undefined
    middlename?: string | undefined
    lastname: string | undefined
    gender: string | undefined
    is_active?: boolean | undefined
    country_code?: string | undefined
    is_premium?: Boolean | undefined
    plan_type?: string | undefined
}

function parsePassword(password: string | undefined, hash: string): Promise<boolean> {
    return bcrypt.compareSync(hash, password as string)
}



export const loginLogic = async (user: any, info: IUSER) => {

    const requestUser = await user.findOne({
        where: {
            contact_number: info.contactNumber
        }
    })
    console.log("🤫🤫🤫 ~ file: index.ts:38 ~ loginLogic ~ requestUser:", requestUser)

    if (requestUser) {
        const isValidaPassword = await parsePassword(info.password, requestUser.password)
        if (!isValidaPassword) {
            throw new UserError(errors.PasswordDidNotMatched, "password")
        } else {
            return "User created successFully"
        }




    } else {
        throw new Error404(errors.UserNotFound, 'contactNumber')
    }


}


export const registerLogic = async (user: any, info: IUSERREGISTER) => {
    const registerUser = await user.create(info)
    if (registerUser) {
        return "User created successfully"
    }
    else {
        throw new UserError('Failed to create user', "email")

    }
}


export const getAllUser = async (user: any) => {
    const data = await user.find();
    if (data) {
        return data
    }
    else {
        throw new Error404("Failed to get User", "User")
    }
}
export const getSingleUserById = async (user: any, type: any, id: string) => {

    const userData = await user.findOne({ where: { user_id: id }, include: [{ model: type, attribute: ['name'] }] })
    if (userData) {
        return userData
    }
    else {
        throw new Error404("Failed to get User", "singleUser")
    }

}