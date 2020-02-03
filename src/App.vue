<template>
  <div id="app">
    <div id="title">
      <img alt="App logo" src="/public/logo.png" />
      <h1>Vue.js Cinema</h1>
    </div>
    <div id="overview">
      <div class="main">
        <movie-list />
        <movie-filter @check-filter="checkFilter" />
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
  },
  data() {
    return {
      genre: [],
      time: []
    };
  },
  methods: {
    checkFilter(category, title, checked) {
      if (checked) {
        this[category].push(title);
      } else {
        let index = this[category].indexOf(title);
        if (index > -1) {
          this[category].splice(index, 1);
        }
      }
    }
  }
};
</script>
