const flatAPI = "http://localhost:3000/films";
const poster = document.getElementById('poster')
const movieTitle = document.getElementById('title')
const movieDescription = document.getElementById('film-info')
const movieRuntime = document.getElementById('runtime')
const movieShowtime = document.getElementById('showtime')
const buyButton = document.getElementById('buy-ticket')
const ticketsRemaining = document.getElementById('ticket-num')
const movieList = document.getElementsByClassName('film-item')

fetch(flatAPI)
    .then((res) => res.json())
    .then(renderMovieInfo)
    .catch(console.error)

//document.getElementById("poster").addEventListener("submit", addPoster);

 function renderMovieInfo(dataArray){
        dataArray.forEach(addDataToPage)
    
 }
function addDataToPage(poster){
        const posterImage = document.createElement("img");
        posterImage.src = poster.image;
        
        posterImage.addEventListener("click", () => {
            displayposterdetails(poster)
        })
          
        poster.append(posterImage);
}




