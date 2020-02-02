<template>
  <div id="movie-list">
    <div v-for="movie in movies" :key="movie" class="movie">{{movie.title}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        { title: "Pulp Fiction" },
        { title: "Home Alone" },
        { title: "Austin Powers" }
      ]
    };
  }
};
</script>