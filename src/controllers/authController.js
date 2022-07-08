import { db } from "../databases/mongodb.js";

async function signUpUser(req, res) {
    const signUpUser = req.body;
    const userExists = await db.collection("users").findOne({ email: signUpUser.email });

    if (userExists) return res.status(401).send("User already registered");
}

export { signUpUser };