import { orderSchema } from "../schemas/schemas.js";

export default function orderMiddleware(req, res, next) {
    const {error} = orderSchema.validate(req.body, { abortEarly: true });

    if(error) {
        return res.status(422).send(error.details.map(item => item.message));
    }

    next();
}