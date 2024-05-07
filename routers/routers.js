
const express = require('express');
const router = express.Router();
const { postCardController, getAllCardsController } = require('../controllers/controllers');

router.post('/api/card', postCardController);
router.get('/api/card', getAllCardsController);

module.exports = router;
