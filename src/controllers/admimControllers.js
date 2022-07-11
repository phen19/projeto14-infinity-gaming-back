import { db } from "../databases/mongodb.js";

async function bannerPostController(req, res) {
    const { imgURL, description } = req.body

    try {
        const alreadyExistingImg = await db.collection("bannerIMG").findOne({ imgURL });

        if (alreadyExistingImg) {
            res.status(401).send("Already existing image");
        } else {
            await db.collection("bannerIMG").insertOne({ imgURL, description });
            res.status(201).send("Added banner");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Bad Request");
    }
}

async function bannerDeleteController(req, res) {
    const { id } = req.params;
    
    try {
        await db.collection("bannerIMG").deleteOne({ _id: new ObjectId(id) });
        res.status(200).send("Deleted banner");

    } catch (error) {
        console.error(error);
        res.status(500).send("Bad Request");
    }
}

async function getAllBanners(req, res) {
    const allBanners = await db.collection("bannerIMG").find().toArray();
    res.status(201).send(allBanners);
}

export { bannerPostController, bannerDeleteController, getAllBanners };