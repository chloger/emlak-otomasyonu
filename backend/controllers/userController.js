import User from "../models/User.js";

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const exUser = await User.findOne({ email });
        if (exUser) {
            return res.status(404).send("kullanıcı zaten kayıtlı.");
        } else {
            const newUser = new User({name, email, password});
            await newUser.save();
            return(
                res.status(201).json({
                    _id:newUser._id,
                    name:newUser.name,
                    email: newUser.email,
                    password: newUser.password
                })
            )
        }
    } catch (error) {
        res.status(500).send("createuser hatalı")
        console.log(error.message)
    }
} 

const loginCurrentUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send("bilgileri eksiksiz giriniz.");
        return;
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        if (userExists.password === password) {
            res.status(201).json({
                _id: userExists._id,
                username: userExists.username,
                email: userExists.email,
            });
        } else {
            res.status(400).send("şifre hatalı.");
            return;
        }
    } else {
        res.status(400).send("kullanıcı bulunamdı.");
        return;
    }

}

const logoutCurrentUser = async(req, res) => {
    try {
        res.json({message:"logout işlemi başarılı"});
    } catch (error) {
        res.send("logoutCurrentUser hatalı");
    }
}





export {createUser, loginCurrentUser, logoutCurrentUser}