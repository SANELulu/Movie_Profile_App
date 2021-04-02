


const MOVIEAPI_KEY = 'acc9f3c5c9182124f176740523389662' 

const searchMovie = document.getElementById('movieSearch');
//const saveMovie = document.getElementById('saveMovie');
const movieList = document.getElementById('movieList');


const searchMovieFunction = async (e)=> {
   //e.preventDefault()
    console.log('aaaaaa')
    const movieInput= document.getElementById('favmovieSearch').value 
    const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIEAPI_KEY}&query=${movieInput}&limit=1`, {
        method: 'GET'
    })
    const resultJson = await result.json()
    const movieResult = resultJson.results[0];
    console.log(resultJson.results[0].original_title);
   const movieListItem =  document.createElement('li')
   movieListItem.textContent = movieResult.original_title
   movieList.append(movieListItem);
   
}


const movieSave = async (e) => {
    e.preventDefault()
    const movieInput = document.getElementById('favmovieSearch').value
    const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${movieInput}&limit=1`, {
        method: 'GET',
    })
    const resultJson = await result.json()
    const movieResult = resultJson.results[0];
    console.log(resultJson.results[0].original_title);
   movieListItem.textContent = movieResult.original_title
   movieList.append(movieListItem);
}


    //saveMovie.addEventListener('click', movieSave);




const addFavMovie = async (event) => {
const response = await fetch('/api/users/addfav', {
        method: 'POST',
        body: JSON.stringify({movie_name}),
        headers: { 'Content-Type': 'application/json' },
});
    
}
if (searchMovie){searchMovie.addEventListener('click', searchMovieFunction)}
const oneStar = document.getElementById('1star')
if (oneStar){oneStar.addEventListener('click', addFavMovie)}
// addFavMovie();


















