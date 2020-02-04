<template>
  <div id="movie-list">
    <movie-item v-for="movie in filteredMovies" :key="movie" class="movie" :movie="movie"/>
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
          return this.genre.find(genre => movie.genre === genre);
        }
      });
    }
  }
};
</script>