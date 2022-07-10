import { db } from "../databases/mongodb.js";
import bcrypt from "bcrypt";

async function signUpUser(req, res) {
    const signUpUser = req.body;
    const userExists = await db.collection("users").findOne({ email: signUpUser.email });

    if (userExists) return res.status(401).send("User already registered");

    try {
        const encryptedPassword = bcrypt.hashSync(signUpUser.password, 10);
        delete signUpUser.confirmPassword;

        await db.collection("users").insertOne({ ...signUpUser, password: encryptedPassword });

        res.status(201).send("Registered User");

    } catch (error) {
        console.error(error);
        res.status(500).send("Bad request");
    }
}

async function loginUser(req, res) {

}

export { signUpUser, loginUser };