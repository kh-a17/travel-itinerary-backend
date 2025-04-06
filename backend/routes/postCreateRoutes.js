const express = require('express');
const router = express.Router();
const { postCreate, getPostInfo } = require('../controllers/postCreator');

router.post('/create-post', postCreate);
router.get('/get-post-info', getPostInfo); // optional

module.exports = router;