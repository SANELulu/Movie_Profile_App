const movieSearch = '';
const APIKEY = 'acc9f3c5c9182124f176740523389662';


const searchMovie = document.getElementById('movieSearch');
const saveMovie = document.getElementById('saveMovie');
const movieList = document.getElementById('movieList');

console.log('hello')
const searchMovieFunction = async (e)=> {
    e.preventDefault()
    
    const movieInput= document.getElementById('movieSearchinput').value 
    const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${movieInput}&limit=1`, {
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
    const movieInput = document.getElementById('movieSearchinput').value
    const result = await fetch()
}

if (searchMovie){

    searchMovie.addEventListener('click', searchMovieFunction)
} 



