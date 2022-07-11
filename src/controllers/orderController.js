import { db } from "../databases/mongodb.js";

async function insertOrder(req, res) {
    const request = req.body;
   
    const order = await db.collection('orders').insertOne({...request});
    const orderInfo= await db.collection('orders').findOne({_id: order.insertedId})
    const user = await db.collection('userSession').findOne({token: request.user})
    const userInfo = await db.collection('users').findOne({_id: user.id})

    delete userInfo.password;
    orderInfo.user = userInfo
    
    res.send(orderInfo)
}

export { insertOrder };