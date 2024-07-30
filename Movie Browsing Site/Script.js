const form = document.getElementById("form");
const container = document.getElementsByClassName("imageHolder")[0];
const resultGrid = document.getElementById("resultGrid");
const loadingSpinner = document.getElementById("loadingSpinner");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = form.querySelector("input").value;
    fetchMovie(title);
});

async function fetchMovie(title) {
    showLoadingSpinner();
    try {
        const result = await fetch(`https://api.tvmaze.com/search/shows?q=${title}`);
        const movies = await result.json();
        if (movies.length === 0) {
            container.innerHTML = "Movie not found!";
            container.style.display = 'block';
        } else {
            imageDisplay(movies);
            container.style.display = 'flex';
        }
    } catch (error) {
        console.log(`Error: ${error}`);
    } finally {
        hideLoadingSpinner();
    }
}

function imageDisplay(movies) {
    container.innerHTML = '';
    for (let movie of movies) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = movie.show.image && movie.show.image.medium ? movie.show.image.medium : 'image_not_found.png';
        img.addEventListener('click', () => {
            fetchMovieDetails(movie.show.id);
        });
        div.appendChild(img);
        const detailsLink = document.createElement('p');
        detailsLink.textContent = "Click for more details";
        detailsLink.style.cursor = "pointer";
        detailsLink.addEventListener('click', () => {
            fetchMovieDetails(movie.show.id);
        });
        div.appendChild(detailsLink);
        container.appendChild(div);
    }
}

async function fetchMovieDetails(id) {
    showLoadingSpinner();
    try {
        const result = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const details = await result.json();
        displayMovieDetails(details);
    } catch (error) {
        console.log(`Error: ${error}`);
    } finally {
        hideLoadingSpinner();
        scrollToDetails();
    }
}

function displayMovieDetails(details) {
    resultGrid.innerHTML = `
    <div class="movie-poster">
        <img src="${(details.image && details.image.medium) ? details.image.medium : 'image_not_found.png'}" alt="movie poster">
    </div>
    <div class="movie-info">
        <h3 class="movie-title">${details.name}</h3>
        <ul class="movie-misc-info">
            <li class="year">Premiered: ${details.premiered}</li>
            <li class="rated">Rating: ${details.rating.average || 'N/A'}</li>
            <li class="released">Status: ${details.status}</li>
        </ul>
        <p class="writer"><b>Language:</b> ${details.language}</p>
        <p class="plot"><b>Summary:</b> ${details.summary}</p>
    </div>
    `;
   resultGrid.style.display = 'block';
}

function showLoadingSpinner() {
    loadingSpinner.style.display = 'block';
}

function hideLoadingSpinner() {
    loadingSpinner.style.display = 'none';
}

function scrollToDetails() {
    resultGrid.scrollIntoView({ behavior: 'smooth' });
}
