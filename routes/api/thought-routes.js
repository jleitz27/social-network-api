const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  

// /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/<userId>
router.route('/:userId').post(createThought);

// /api/thoughts/<thoughtsId>/<reaction>
router
  .route('/:thoughId/reactions')
  .post(addReaction)
  

// /api/thoughts/<thoughtsId>/<reactionId>
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;