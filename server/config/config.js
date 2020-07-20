let config = {
    "development": {
        "twitter_access": "2313968888-7SVcGBBAkZnznPnb6WBhAGmvu3NmKYsH6QDfJvp",
        "twitter_secret": "ptpxRxt21zdYoF5BTDpUYNh44NZxAeosB9Ws30TgJQJYN",
        "Api_Key": "1XfruGSO1AynejSj8XrzW1Lfh",
        "Api_Secret_key": "csYgE3mYr4nG1aqA3XQd5o6kwIapFOfv4s3a1EE7eJ4676kPJj",
        "oauth_token": "awUH9wAAAAABGGjkAAABc2s9dqY",
        "oauth_token_secret": "yBcXoC1cbcwZd2M4lvOCi1orn7NfeCPo",
        "bearer": "AAAAAAAAAAAAAAAAAAAAAORoGAEAAAAA2diAQZ4vnjPkem7i44XytRJeDTk%3DrAH8hC779XqiVX4ozfkmnyvEJP1nnC0DiuuZmJBHWfKfnXiD6z"
    },
    "qa": {
        "twitter_access": "2313968888-7SVcGBBAkZnznPnb6WBhAGmvu3NmKYsH6QDfJvp",
        "twitter_secret": "ptpxRxt21zdYoF5BTDpUYNh44NZxAeosB9Ws30TgJQJYN",
        "Api_Key": "1XfruGSO1AynejSj8XrzW1Lfh",
        "Api_Secret_key": "csYgE3mYr4nG1aqA3XQd5o6kwIapFOfv4s3a1EE7eJ4676kPJj"
    }
}

//9885165
// {"token_type":"bearer","access_token":"AAAAAAAAAAAAAAAAAAAAAORoGAEAAAAA2diAQZ4vnjPkem7i44XytRJeDTk%3DrAH8hC779XqiVX4ozfkmnyvEJP1nnC0DiuuZmJBHWfKfnXiD6z"}

module.exports = config[process.env.NODE_ENV || "development"]