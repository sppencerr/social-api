const { Thought, User } = require("../models");

// Get all thoughts
const thoughtController = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find().sort({ createdAt: -1 });
            res.json(thoughts);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Error fetching thoughts" });
        }
    },



    // Get single thought by Id
        async getSingleThought(req, res) {
            try {
                const thought = await Thought.findOne({ _id: req.params.thoughtId });
                if (!thought) {
                    return res.status(404).json({ message: "No thought with this id!" });
                }
                res.json(thought);
            } catch (err) {
                console.log(err);
                res.status(500).json({ message: "Error fetching thought" });
            }
        },
        // create thought
        async createThought(req, res) {
            try {
                const thought = await Thought.create(req.body);
                const user = await User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: thought._id } },
                    { new: true }
                );
                if (!user) {
                    return res
                        .status(404)
                        .json({ message: "Thought created but no user with this id!" });
                }
                res.json({ message: "Thought created!" });
            } catch (err) {
                console.log(err);
                res.status(500).json({ message: "Error creating thought" });
            }
        },
       
            async updateThought(req, res) {
                try {
                    const thought = await Thought.findOneAndUpdate(
                        { _id: req.params.thoughtId },
                        { $set: req.body },
                        { runValidators: true, new: true }
                    );
                    if (!thought) {
                        return res.status(404).json({ message: "No thought with this id!" });
                    }
                    res.json(thought);
                } catch (err) {
                    console.log(err);
                    res.status(500).json({ message: "Error updating thought" });
                }
            },
        
        



    };