<template>
  <div id="movie-list">
    <div v-for="movie in filteredMovies" :key="movie" class="movie">{{movie.title}}</div>
  </div>
</template>

<script>
import genres from "../util/genres";
export default {
  props: ["genre", "time"],
  data() {
    return {
      movies: [
        { title: "Pulp Fiction", genre: genres.CRIME },
        { title: "Home Alone", genre: genres.COMEDY },
        { title: "Austin Powers", genre: genres.COMEDY }
      ]
    };
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