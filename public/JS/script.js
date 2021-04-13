


const MOVIEAPI_KEY = 'acc9f3c5c9182124f176740523389662' 
const searchMovie = document.getElementById('movieSearch');
//const saveMovie = document.getElementById('saveMovie');
const movieList = document.getElementById('movieList');


const addPosterButtom = document.getElementById('movieSearch');

let movieName;
let moviePosterRoot = "https://image.tmdb.org/t/p/w500/";
let moviePosterURL;



const searchMovieFunction = async (e)=> {
   e.preventDefault()
    const movieInput= document.getElementById('favmovieSearch').value 
    const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIEAPI_KEY}&query=${movieInput}&limit=1`, {
        method: 'GET'
    })
    const resultJson = await result.json()
    const movieResult = resultJson.results[0];

   const movieListItem =  document.createElement('li')
   movieName = movieResult.original_title
   console.log(movieName)
   movieListItem.textContent = movieResult.original_title
   movieList.append(movieListItem);
   
   getMoviePoster();
   
}


const movieSave = async (e) => {
    e.preventDefault()
    const movieInput = document.getElementById('favmovieSearch').value
    const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=acc9f3c5c9182124f176740523389662&query=${movieInput}&limit=1`, {
        method: 'GET',
    })
    const resultJson = await result.json()
    const movieResult = resultJson.results[0];
    console.log(resultJson.results[0].original_title);
    const movieListItem =  document.createElement('li')
    movieName = movieResult.original_title
    console.log(movieName)
    movieListItem.textContent = movieResult.original_title
    moviePosterURL = moviePosterRoot + movieResult.poster_path;
    console.log(moviePosterURL)
    
    addFavMovie();
}

    //saveMovie.addEventListener('click', movieSave);




const addFavMovie = async (event) => {
    
console.log(moviePosterURL);
console.log("is hitting addFavMovie()")    
const response = await fetch('/api/users/addfav', {
        method: 'POST',
        body: JSON.stringify({ movieName , moviePosterURL}),
        headers: { 'Content-Type': 'application/json' },
});

    if(response.status === 200){
        console.log('added')

        Toastify({
            text: "Movie Saved to Favorites!",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            className: "Success Toast",
            gravity: "top",
            position: "center"
          }).showToast();

    } else console.log('failed') 
}



//http://www.omdbapi.com/?apikey=43a1230f&t=garfield


const getMoviePoster= async(event) =>{
    
    async function getMovie1(){
        const movieInput= document.getElementById('favmovieSearch').value 
        let res = await fetch(`https://www.omdbapi.com/?apikey=43a1230f&t=${movieInput}`);
        let data = await res.json()
        return data;
        }
        getMovie1()
        .then(data=>{
            
            let dataVariable = data.Poster;
                            
                            document.getElementById('searchPoster').src=dataVariable;
                                  
        })
        
}

if (searchMovie){searchMovie.addEventListener('click', searchMovieFunction)}
const oneStar = document.getElementById('Onestar')
if (oneStar){oneStar.addEventListener('click', movieSave)}

// addFavMovie();

    // .then(data => {

    // let dataVariable = data.results;
    // // let dataParsed = JSON.parse(dataVariable);
    // console.log(dataVariable)

    // let dataArray = []
    // let descriptionArray = []

    // for (var i = 0; i < dataVariable.length-16; i++) {
    //     dataArray.push(dataVariable[i].original_title)
    //     descriptionArray.push(dataVariable[i].overview)
    // }

    // document.getElementById('movieTitle1').innerHTML= (dataArray[1]);
    // document.getElementById('movieTitle2').innerHTML= (dataArray[2]);
    // document.getElementById('movieTitle3').innerHTML= (dataArray[3]);

    // document.getElementById('movieDescription1').innerHTML= (descriptionArray[1]);
    // document.getElementById('movieDescription2').innerHTML= (descriptionArray[2]);
    // document.getElementById('movieDescription3').innerHTML= (descriptionArray[3]);
  

    //     async function getPoster(){
    //         let res = await fetch('https://omdbapi.com/?t='+  dataArray[1]  +'&apikey=43a1230f');
    //         let omdbData = await res.json()
    //         return omdbData;
    //     }
    //     getPoster()
    //     .then(omdbData => {
        
    //         let posterVar1 =  omdbData.Poster;
    //         document.getElementById('movie1').src=posterVar1
    //         console.log(posterVar1)
    //     })
                   













