const router = require("express").Router();

const youtubeSearch = async () => {
  var video = "";

  $("#form").submit(function (event) {
    event.preventDefault();
    var search = $("#search").val();
    console.log(search)
    // videoSearch(API_KEY, search, 1);
  });
  // function videoSearch(API_KEY, search, maxResults) {
  //   $("#videos").empty();
  //   $.get(
  //     "https://www.googleapis.com/youtube/v3/search?key=" +
  //       API_KEY +
  //       "&type=video&part=snippet&maxResults=" +
  //       maxResults +
  //       "&q=" +
  //       search +
  //       "%official%trailer",
  //     function (data) {
  //       console.log(data);

  //       data.items.forEach((item) => {
  //         video = `
  //               <iframe width="560" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
  //               `;
  //         console.log(video);
  //         $("#videos").append(video);
  //       });
  //     }
  //   );
  // }
};

module.exports = router;
