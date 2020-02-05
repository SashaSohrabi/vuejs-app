<template>
  <div id="movie-list">
    <movie-item v-for="movie in filteredMovies" :key="movie" :movie="movie.movie"/>
  </div>
</template>

<script>
import genres from "../util/genres";
import MovieItem from "./MovieItem.vue";

export default {
  props: ["genre", "time", "movies"],
  components: {
    MovieItem
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(movie => {
        if (!this.genre.length) {
          return true;
        } else {
          let movieGenres = movie.movie.Genre.split(", ");
          let matched = true;
          this.genre.forEach(genre => {
            if(movieGenres.indexOf(genre) === -1) {
              matched = false;
            }
          })
          return matched;
        }
      });
    }
  }
};
</script>