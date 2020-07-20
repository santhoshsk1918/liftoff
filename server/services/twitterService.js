let unirest = require("unirest");
let async  = require('async');
let twitterService = require('./twitterService')
const appConfig = require("../config/config")
module.exports.getTwitterDetails = (screenName) => {

    return new Promise((resolve, reject) => {
        let friendsList = []
        let getMore = true;
        let nextCursor = -1
        async.whilst(
            function test(cb){
                cb(null, getMore);
            },
            function iter(callback) {
                unirest
                    .get(`https://api.twitter.com/1.1/friends/list.json?screen_name=${screenName}&count=150&cursor=${nextCursor}`)
                    .header({
                        "Authorization": `Bearer ${appConfig.bearer}`
                    })
                    .then((resp) => {
                        let users = resp.body.users;
                        if(users != "undefined"){
                            users.forEach((item) => {
                                friendsList.push({
                                    id: item.id,
                                    name: item.name,
                                    screen_name: item.screen_name,
                                    profile_background_image_url: item.profile_background_image_url,
                                    profile_image_url: item.profile_image_url,
                                    profile_image_url_https: item.profile_image_url_https
                                })
                            })
                            let next_cursor = resp.body.next_cursor;
                            nextCursor = next_cursor
                            if(next_cursor == 0){
                                getMore = false;
                            }
                            callback(null, "");
                        }else{
                            callback(null, "");
                        }
                    })
                    .catch((err) => {
                        console.error(err);
                    })
            },
            function (err, n) {
                console.log(friendsList);
                console.log(friendsList.length);
                resolve(friendsList);
            })
    })
}

module.exports.getCommonFriends = (screenName1, screenName2) => {
    return new Promise((resolve, reject) => {
        let getFriendsPromise = twitterService.getTwitterDetails(screenName1);
        let friend1List = []
        getFriendsPromise.then((resp) => {
            friend1List = resp;
            return twitterService.getTwitterDetails(screenName2);
        }).then((resp) => {
            let items = resp.map((item) => item.id);
            let newList = friend1List.filter((item) => {
                return items.includes(item.id);
            })

            resolve(newList)
        }).catch((err) => {
            console.log(err);
        })
    })
}

// twitterService.getCommonFriends("santhosh1918", "snehaskashyap1");