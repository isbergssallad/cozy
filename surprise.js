const surprise = document.getElementById("surprise");

const jsConfetti = new JSConfetti();


function getRandomMovie() {
    const moviesShuffled = window.movies.sort(() => Math.random() - 0.5);
    return moviesShuffled[0];
  }


function Surprise() {

    jsConfetti.addConfetti();
    surprise.innerHTML = "";
    const movie = getRandomMovie();

    const link = document.createElement("a");
    link.href = "film.html?film_id=" + movie.id;

    const image = document.createElement("img");
    image.src = movie.poster;

    link.appendChild(image)
    surprise.appendChild(link);

    const title = document.createElement("h1");
    title.textContent = movie.title + " " + movie.year;

    surprise.appendChild(title);

}



