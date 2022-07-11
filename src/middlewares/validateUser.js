import {db} from "../databases/mongodb.js";

async function validateUser(req, res, next){
    const { authorization} = req.headers;

    const token = authorization?.replace('Bearer ', '');
    const session =await db.collection('userSession').findOne({token: token});

    if(!session){
        return res.sendStatus(401);
    }

    res.locals.session = session;

    next();

}

export default validateUser;