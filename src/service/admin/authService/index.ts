import { Op } from 'sequelize'
import Error404 from '@/utils/error/404Error'
import errors from '@/Error'
import UserError from '@/utils/error/UserError'
import Token from '@/helper/token'

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
    is_premium?: boolean | undefined
    plan_type?: string | undefined
}

async function parsePassword(password: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(password, hash)
    return isValid
}



export const loginLogic = async (user: any, info: IUSER) => {
    const requestUser = await user.findOne({
        where: {
            contact_number: info.contactNumber
        }
    })
    // console.log("🤫🤫🤫 ~ file: index.ts:38 ~ loginLogic ~ requestUser:", requestUser)

    if (requestUser) {
        const isValidPassword = await parsePassword(info.password as string, requestUser.password)
        if (isValidPassword) {
            const { password, ...rest } = requestUser
            return {
                "refreshToken": Token.generateRefreshToken({ id: requestUser.id, email: requestUser.email }),
                "accessToken": Token.generateAccessToken({ id: requestUser.id, email: requestUser.email }),
                "user": { rest }
            }
        }
        throw new UserError(errors.PasswordDidNotMatched, "password")
    } else {
        throw new Error404(errors.UserNotFound, 'contactNumber')
    }

}


export const registerLogic = async (user: any, info: IUSERREGISTER) => {
    const registerUser = await user.create(info)
    if (registerUser) return "User created successfully"
    throw new UserError('Failed to create user', "email");
}


export const getAllUser = async (user: any) => {
    const data = await user.findAll({ attributes: ['id', 'contact_number', 'firstName', 'lastName', 'email', 'middleName', 'gender'] });
    if (data) return data
    throw new Error404("Failed to get User", "User")

}
export const getSingleUserById = async (user: any, type: any, id: string) => {
    const userData = await user.findOne({ where: { user_id: id }, include: [{ model: type, attribute: ['name'] }] })
    if (userData) return userData
    throw new Error404("Failed to get User", "singleUser")

}