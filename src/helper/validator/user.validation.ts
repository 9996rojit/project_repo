import Joi from 'joi';

const loginData = {
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'np'] } }),
    contact_number: Joi.string().min(9).max(10).required(),
    password: Joi.string()
        // eslint-disable-next-line prefer-regex-literals
        .pattern(new RegExp('^[a-zA-Z0-9@#$_]{3,30}$')),
}

const registerData = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    middleName: Joi.string(),
    gender: Joi.string().required(),
    role: Joi.string().required(),
    country_code: Joi.string().required(),
    is_active: Joi.boolean(),
    is_premium: Joi.boolean(),
    plan_type: Joi.string()
}

const userSchema = Joi.object({
    ...loginData,
    ...registerData
})

const loginSchema = Joi.object(loginData)

export default {
    userSchema,
    loginSchema

}

