const express = require('express');
const router = express.Router();
const twitterService = require("../services/twitterService");


/* GET home page. */
router.get('/getMutualFriends', function(req, res, next) {
    console.log(req.query);
    let screenName1 = req.query.screenName1;
    let screenName2 = req.query.screenName2;

    let listPromise = twitterService.getCommonFriends(screenName1, screenName2);
    listPromise.then((resp) => {
        res.send(resp);
        res.end();
    }).catch((err) => {
        res.status(500);
        res.end();
    })
});

module.exports = router;
