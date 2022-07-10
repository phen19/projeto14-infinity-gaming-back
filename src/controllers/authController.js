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
    const { email, password } = req.body;
   
    try {
        const user = await db.collection("users").findOne({ email });

        if(user && bcrypt.compareSync(password, user.password)){
            res.sendStatus(200);
        }
        else{
            res.status(401).send("Authorization Failure");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Bad Request");
    }
}

export { signUpUser, loginUser };