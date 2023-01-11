const { User, Thought } = require("../models");

const userController = {
    async getUsers(req, res) {
        try {
            const users = await User.find().select("-__v");
            res.json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Error getting all users." });
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId }).select("-__v").populate("friends").populate("thoughts");
            if (!user) {
                return res.status(404).json({ message: "No user with this id." });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Error getting user." });
        }
    },
     // Create a new user
createUser(req, res) {
    User.create({...req.body})
    .then((newUser) => {
    res.json(newUser);
    })
    .catch((err) => {
    console.log(err);
    res.status(500).json(err);
    });
    },
  // Update user information
updateUser(req, res) {
    User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
        .then((updatedUser) => {
            if (!updatedUser) {
                return res.status(404).json({ message: "No user with this id!" });
            }
            res.json(updatedUser);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        
}
        )
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "No user with this id!" });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
