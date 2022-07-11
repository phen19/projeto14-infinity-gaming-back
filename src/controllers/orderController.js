import { db } from "../databases/mongodb.js";

async function insertOrder(req, res) {
    const request = req.body;
   
    const order = await db.collection('orders').insertOne({...request});
    const orderInfo= await db.collection('orders').findOne({_id: order.insertedId})


    res.send(orderInfo)
}

export { insertOrder };