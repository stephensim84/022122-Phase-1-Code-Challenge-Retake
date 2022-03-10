const flatdangoApi = "http://localhost:3000/films";
const imgPoster = document.getElementById("poster");
const movieTitle = document.getElementById("films");
const movieShowing = document.getElementById("showing");
const movieRunTime = document.getElementById("runtime");
const movieInfo = document.getElementById("film-info");
const movieShowTime = document.getElementById("showtime");
const ticketNum = document.getElementById("ticket-num");



fetch(flatdangoApi)
    .then((res) => res.json())
    .then(renderMoviePics)

function renderMoviePics(data){
    
     
    const div = document.createElement("div");
    movieShowing.append("showing");

        
     data.forEach(element => {
       const movie = document.importNode(movieShowing.content, true);
        movie.imgPoster.src = data.poster;
        movie.movieTitle.textContent = data.films;
        movie.movieShowing.textContent = data.showing;
        movie.movieRunTime.textContent = data.runtime;
        movie.movieInfo.textContent = data.showtime
        movie.movieShowTime.textContent = data.ticketssold;
        movie.ticketNum.textContent = data.title;
        renderMoviePics();



         
     });

}
