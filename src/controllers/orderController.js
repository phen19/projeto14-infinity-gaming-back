import { db } from "../databases/mongodb.js";

async function insertOrder(req, res) {
    const request = req.body;
   
    const teste = await db.collection('orders').insertOne({...request});
    const teste2= await db.collection('orders').findOne({_id: teste.insertedId})


    res.send(teste2)
}

export { insertOrder };