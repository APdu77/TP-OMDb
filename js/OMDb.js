const button = document.querySelector("button")

button.addEventListener('click', (e) => {
  document.querySelector('#movies').textContent = "";
  e.preventDefault();
  console.log("test1");
  let saisie = document.querySelector('#title');

  fetch(`https://www.omdbapi.com/?s=${saisie.value}&apikey=de846841`)//&apikey=f6e256e1
  .then(response => response.json())
  .then(results => {
    console.log(results);
    console.log(results.totalResults);
    let numberPages = Math.ceil(results.totalResults/10) ;
  //})
  
  for (i = 1; i <= numberPages; i++) {
    fetch(`https://www.omdbapi.com/?s=${saisie.value}&page=${i}&apikey=de846841`)//&page=2
    .then(res => res.json())
    .then(movies => {
      console.log(movies);

      movies.Search.forEach(movie => {
        let moviesLink = document.createElement('a') ;
        moviesLink.href = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=de846841` ;
        moviesLink.className = "col-6 col-sm-4 col-md-3 col-xl-2";
        let moviesFigure = document.createElement('figure');
        moviesFigure.className = "container-fluid";
        let moviesImg = document.createElement('img');//
        moviesImg.src = `${movie.Poster}`;
        moviesImg.alt = `${movie.Title}`;
        moviesImg.className = "col-12";
        let moviesFigCaption = document.createElement('figcaption');
        moviesFigCaption.textContent = `${movie.Title}`;
        document.querySelector('#movies').appendChild(moviesLink);
        moviesLink.appendChild(moviesFigure);
        moviesFigure.appendChild(moviesImg);
        if (movie.Poster=='N/A'){
          moviesImg.src = "img/cone-striped.svg";
          moviesImg.width = 300;
         // moviesImg.backgroung-color = ;
        }
          moviesFigure.appendChild(moviesFigCaption);
        
        

        //let moviesId = document.createElement('div');
       // moviesId.innerHTML = `${movie.Title}`;
        //document.querySelector('#movies').appendChild(moviesId);
      });
    })
  }
})//position

})



