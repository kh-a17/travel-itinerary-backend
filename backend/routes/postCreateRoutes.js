const express = require('express');
const router = express.Router();
const { postCreate, getPostInfo } = require('../controllers/postCreator');

router.post('/create-post', postCreate);
router.get('/get-post-info', getPostInfo); // optional
const { postCreate } = require('../controllers/postCreator');

router.post('/create-post', postCreate);

module.exports = router;