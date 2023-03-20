import { Op } from 'sequelize'
import bcrypt from 'bcrypt'
import Error404 from '@/utils/error/404Error'
import errors from '@/Error'
import BaseError from '@/utils/error/BaseError'
import UserError from '@/utils/error/UserError'


interface IUSER {
    email: string | undefined
    password: string | undefined
    contactNumber?: string | undefined
}

function parsePassword(password: string | undefined, hash: string): Promise<boolean> {
    return bcrypt.compare(hash, password as string)
}



export const loginLogic = async (user: any, info: IUSER) => {
    const requestUser = await user.findOne({
        where: {
            [Op.or]: [
                { email: info.email },
                // { contact_number: info.contactNumber }
            ]
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
        throw new Error404(errors.UserNotFound, (!info.email) ? 'email' : 'contactNumber')
    }


}


export const registerLogic = async (user: any) => {


}