// thought routes

// /api/thoughts
// get all thoughts
// get a single thought by its id
// post a new thought (push the created thought's id to the associated user's throught array field)

// /api/thoughts/:thoughtId/reactions
// post a reaction stored in a single thought's reactions array field
// delete to pull and remove a reaction by the reaction's id value

const router = require('express').Router();
const {
   getThoughts,
   getSingleThought,
   createThought,
   updateThought,
   deleteThought,
   addReaction,
   removeReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').put(addReaction).put(removeReaction);

router.route('/:thoughtId/reactions/reactionId').put(addReaction).put(removeReaction);

module.exports = router;