const axios = require('axios');
require('dotenv').config();

module.exports ={
    youtubeSearch: function(search){
        return axios.get("https://www.googleapis.com/youtube/v3/search?key=" +
        process.env.API_KEY +
        "&type=video&part=snippet&maxResults=1"+
        "&q=" +
        search +
        "%official%trailer",)
    }
}