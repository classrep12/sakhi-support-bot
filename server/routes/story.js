const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');

router.post('/submit', storyController.postStory);
router.get('/all', storyController.getStories);

module.exports = router;
