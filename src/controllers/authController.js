import { db } from "../databases/mongodb.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

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

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(
                {
                    id: user._id,
                    name: user.name
                },
                process.env.JWT_KEY,
                {
                    expiresIn: "1d"
                }
            );


            await db
                .collection("userSession")
                .insertOne({
                    id: user._id,
                    name: user.name,
                    token
                });

            res.status(200).send({
                message: "Authentication Success ",
                token: token
            });
        }
        else {
            res.status(401).send("Authentication Failure");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Bad Request");
    }
}

export { signUpUser, loginUser };