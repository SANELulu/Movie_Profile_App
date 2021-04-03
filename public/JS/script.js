


const MOVIEAPI_KEY = 'acc9f3c5c9182124f176740523389662' 
const searchMovie = document.getElementById('movieSearch');
//const saveMovie = document.getElementById('saveMovie');
const movieList = document.getElementById('movieList');
let movieName;

const searchMovieFunction = async (e)=> {
   e.preventDefault()
    const movieInput= document.getElementById('favmovieSearch').value 
    const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIEAPI_KEY}&query=${movieInput}&limit=1`, {
        method: 'GET'
    })
    const resultJson = await result.json()
    const movieResult = resultJson.results[0];
    console.log(resultJson.results[0]);
   const movieListItem =  document.createElement('li')
   movieName = movieResult.original_title
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
        body: JSON.stringify({movieName}),
        headers: { 'Content-Type': 'application/json' },
});
    if(response.status === 200){
        console.log('added')
    } else console.log('failed')
    
    Toastify({
        text: "Movie Saved",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        className: "Success Toast",
        gravity: "top",
        position: "center"
      }).showToast();
    
}
if (searchMovie){searchMovie.addEventListener('click', searchMovieFunction)}
const oneStar = document.getElementById('Onestar')
if (oneStar){oneStar.addEventListener('click', addFavMovie)}
// addFavMovie();


















