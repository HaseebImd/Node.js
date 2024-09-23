const shortid = require('shortid'); //
const URL = require('../models/url'); //


async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    if (!body || !body.url) {
        return res.status(400).send('Please provide a valid URL.');
    }
    const shortID = shortid();
    await URL.create(
        {
            shortID,
            redirectURL: body.url,
            visitHistory: []
        }
    )
    res.json({ shortID });
}

async function handleRedirectToLongUrl(req, res) {
    console.log('handleRedirectToLongUrl');
    const shortID = req.params.shortID;
    const url = await URL.findOneAndUpdate({
        shortID
    },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        }
    )
    res.redirect(url.redirectURL);

};


async function handleGetAnalytics(req, res) {
    const shortID = req.params.shortID;
    const url = await URL.findOne({
        shortID
    });
    if (!url) {
        return res.status(404).send('URL not found.');
    }
    const totalVisits = url.visitHistory.length;
    res.json(
        {
            totalVisits: totalVisits,
            history: url.visitHistory
        }
    )

}
module.exports = {
    handleGenerateNewShortUrl,
    handleRedirectToLongUrl,
    handleGetAnalytics
};