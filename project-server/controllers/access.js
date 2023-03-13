const db = require('../models')
const person=db.persons


exports.login=async(req, res) => {
    if (!req.body.id|| !req.body.password) 
     return res.status(400).json({ message: 'All fields are required'}) 

    if(!(req.body.password==person.findAll({where:req.body.password=paassword})))    
        return res.status(400).json({ message: 'password does not match to user id'})
    
    else  res.status(201)
}


//async function login(req, res) {
    //     const { userId, userPassword } = req.body;
    
    //     try {
    //         const user = await User.findOne({ where: { userId } });
    
    //         if (!user) {
    //             // User with this email not found
    //             return res.status(401).json({ message: "Invalid id" });
    //         }
    
    //         const isPasswordValid = await bcrypt.compare(userPassword, user.userPassword);
    
    //         if (!isPasswordValid) {
    //             // Incorrect password
    //             return res.status(401).json({ message: "Invalid password. Try again" });
    //         }
    //         // Generate and send JWT token
    //         const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    //         res.json({ token });
    //     } 
    //     catch (err) {
    //         console.error(err);
    //         res.status(500).json({ message: "Server error" });
    //     }
    // };