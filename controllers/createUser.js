import { UserModel } from "../models/user.model.js";

async function createUser(req, res) {
    const {username} = req.body;
    try {
        let user = await new UserModel({username})
        await user.save()
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export default createUser;