import { bannnerSchema } from "../schemas/schemas.js";

export default function bannerMiddleware(req, res, next) {
    const validation = bannnerSchema.validate(req.body, { abortEarly: true });

    if(validation.error) {
        return res.status(422).send(validation.error.details);
    }

    next();
}