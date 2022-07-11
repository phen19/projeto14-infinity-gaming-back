import joi from "joi";


export const signUpSchema = joi.object({
    name: joi.string().min(1).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password')
});

export const orderSchema = joi.object({
    items: joi.required(),
    payment: joi.required(),
    total: joi.number().required()
})