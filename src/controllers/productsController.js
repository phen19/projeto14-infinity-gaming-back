import { db } from "../databases/mongodb.js";


async function getProducts(req, res) {
    
    const getProducts = await db.collection("products").find().toArray();

    res.send(getProducts)
}

export { getProducts };