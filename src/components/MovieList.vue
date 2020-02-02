<template>
  <div id="movie-list">
    <div v-for="movie in movies" v-bind:key="movie.key" class="movie">{{movie.title}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        { title: "Pulp Fiction", key: "1" },
        { title: "Home Alone", key: "2" },
        { title: "Austin Powers", key: "3" }
      ]
    };
  }
};
</script>