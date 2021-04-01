const arr = [];
const movie_name = document.querySelector('#favmovieSearch')


const addFavMovie = async (event) => {
const response = await fetch('/api/users/addfav', {
        method: 'POST',
        body: JSON.stringify({movie_name}),
        headers: { 'Content-Type': 'application/json' },
});
}

// addFavMovie();
