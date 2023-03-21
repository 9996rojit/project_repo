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
    return bcrypt.compare(hash, password as string)
}



export const loginLogic = async (user: any, info: IUSER) => {

    const requestUser = await user.findOne({
        where: {
            contact_number: info.contactNumber
        }
    })
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