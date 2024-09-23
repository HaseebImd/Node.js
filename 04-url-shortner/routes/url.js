const express = require('express');
const { handleGenerateNewShortUrl, handleRedirectToLongUrl, handleGetAnalytics } = require('../controller/url.js');
const router = express.Router();

router.post('/', handleGenerateNewShortUrl);
router.get('/:shortID', handleRedirectToLongUrl);
router.get('/analytics/:shortID', handleGetAnalytics);


module.exports = router;