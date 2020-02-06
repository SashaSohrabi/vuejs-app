<template>
  <div id="app">
    <div id="title">
      <img alt="App logo" src="/public/logo.png" />
      <h1>Vue.js Cinema</h1>
    </div>
    <div id="overview">
      <div class="main">
        <movie-list :genre="genre" :time="time" :movies="movies" :day="day._d" />
        <movie-filter />
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from "./components/MovieList.vue";
import MovieFilter from "./components/MovieFilter.vue";
import { checkFilter } from "./util/bus"

export default {
  name: "app",
  components: {
    MovieList,
    MovieFilter
  },
  data() {
    return {
      genre: [],
      time: [],
      movies: [],
      moment: [],
      day: this.$moment()
    };
  },
  created() {
    this.$http.get("/api").then(res => {
      this.movies = res.data;
    });
    this.$bus.$on("check-filter", checkFilter.bind(this));
  }
};
</script>
