import joi from "joi";


export const signUpSchema = joi.object({
    name: joi.string().min(1).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password')
});

export const orderSchema = joi.object({
    user: joi.required(),
    items: joi.required(),
    payment: joi.required(),
    cardInfo: joi.optional(),
    total: joi.number().required()
})


export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});


export const bannnerSchema = joi.object({
    imgURL: joi.string().required(),
    description: joi.string().required()
});