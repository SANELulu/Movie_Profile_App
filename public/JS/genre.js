const genreValue = document.getElementById("genreValue").innerHTML;
console.log(genreValue);

let genreNumber = 0;

switch (genreValue){
    case "Horror" :
        genreNumber = 27;
        break;

    case "Drama" :
        genreNumber = 18;
        break;

    case "Adventure" :
        genreNumber = 12;
        break;

    case "Action" :
        genreNumber = 28;
        break;

    case "Comedy" :
        genreNumber = 35;
        break; 
}

console.log(genreNumber);

//either switch statement or conditional 

// $.ajax({
//     method: 'get',
//     url: 'https://api.themoviedb.org/3/discover/movie?with_genres='+ genreNumber +'&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en'
//   }).then(res => {
//     res.results.array.forEach(element => {
        
//     });

// });
