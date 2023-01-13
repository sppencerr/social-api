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
    