class MovieApi {
  constructor() {
    this.apiKey = "9a75b3b33b81b046434198c9a58b6b33";
    this.baseImgUrl = "https://image.tmdb.org/t/p/w1280/";
    this.populerMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=tr-TR&sort_by=popularity.desc`;
    this.searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=`;
    this.movieDisplay = document.getElementById("moviesContainer");
  }

  async getPopulerMovie() {
    const populerMovie = await fetch(this.populerMovieUrl);
    const data = await populerMovie.json();
    this.displayInfo(data);
  }

  async getSearchMovie(search) {
    const searchMovie = await fetch(this.searchUrl + search);
    const data = await searchMovie.json();
    console.log("oldu");
    this.displayInfo(data);
  }

  displayInfo(movie) {
    this.movieDisplay.innerHTML = "";

    movie.results.forEach((element) => {
      this.movieDisplay.innerHTML += `
            <div class="dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl border border-gray-700 flex flex-col">
    <img
      class="w-full h-48 object-cover"
      src="${this.baseImgUrl}${element.backdrop_path}"
      alt="Film Afişi"
    />
    <div class="p-4 flex-1 flex flex-col justify-between">
      <h3 class="text-lg font-bold dark:text-white mb-2 text-center">${
        element.title
      }</h3>
      <div class="flex items-center justify-center mb-2">
        <span class="text-sm dark:text-gray-300 mr-2">IMDB:</span>
        <span class="font-semibold px-2 py-1 rounded bg-${this.changeColor(
          element.vote_average
        )}-700 text-white">
          ${element.vote_average.toFixed(2)}
        </span>
      </div>
      <div class="w-full bg-gray-700 rounded-full h-2.5 mb-2">
        <div class="bg-${this.changeColor(
          element.vote_average
        )}-500 h-2.5 rounded-full" style="width:${
        element.vote_average * 10
      }%"></div>
      </div>
    </div>
  </div>
        `;
    });
  }
  changeColor(color) {
    if (color >= 8) {
      return "green";
    } else if (color >= 6) {
      return "yellow";
    } else {
      return "red";
    }
  }
}
