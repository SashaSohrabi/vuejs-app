<template>
  <div id="app">
    <div id="title">
      <img alt="App logo" src="/public/logo.png" />
      <h1>Vue.js Cinema</h1>
    </div>
    <div id="overview">
      <div class="main">
        <movie-list />
        <movie-filter />
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from "./components/MovieList.vue";
import MovieFilter from "./components/MovieFilter.vue";
export default {
  name: "app",
  components: {
    MovieList,
    MovieFilter
  }
};
</script>
