<template>
  <div id="detail" v-if="movie">
    <movie-item :movie="movie.movie" :sessions="[]" />
  </div>
</template>
<script>
import MovieItem from "../components/MovieItem.vue";
export default {
  props: ["movies"],
  components: {
    MovieItem
  },
  computed: {
    movie() {
      let movie = this.movies.find(movie => movie.id === this.$route.params.id);

      return movie ? movie : null;
    }
  },
  created() {
    console.log(this.$route.params.id);
  }
};
</script>  
