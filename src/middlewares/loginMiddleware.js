import { loginSchema } from "../schemas/schemas.js";

export default function loginMiddleware(req, res, next) {
    const validation = loginSchema.validate(req.body, { abortEarly: true });

    if(validation.error) {
        return res.status(422).send(validation.error.details);
    }

    next();
}