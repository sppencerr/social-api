const express = require("express");
const router = express.Router();
const thoughtController = require('../../controllers/thought-controller');

// Handle GET requests to "/" by calling the "getThoughts" function from the thoughtController
router.get("/", thoughtController.getThoughts);
// Handle POST requests to "/" by calling the "createThought" function from the thoughtController
router.post("/", thoughtController.createThought);

router.put("/:thoughtId", thoughtController.updateThought);
// Handle DELETE requests to "/:thoughtId/reactions/:reactionId" by calling the "removeReaction" function from the thoughtController
router.delete("/:thoughtId", thoughtController.deleteThought);

router.get("/:thoughtId", thoughtController.getSingleThought);
router.post("/:thoughtId/reactions", thoughtController.addReaction);
router.delete("/:thoughtId/reactions/:reactionId", thoughtController.removeReaction);

module.exports = router;
