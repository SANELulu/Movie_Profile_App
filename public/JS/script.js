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


const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item')
container.onclick = e => {
    const elClass = e.target.classList;
    if (elClass.contains('active')) {
        items.forEach(
            item => item.classList.remove('active')
        );
        console.log(e.target.getAttribute("data-rate"));
    }
    else {
        items.forEach(
            item => item.classList.remove('active')
        );
        console.log(e.target.getAttribute("data-rate"));
        elClass.add('active');
    }
};

