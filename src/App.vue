<template>
  <div id="app">
    <div id="title">
      <router-link to="/">
        <img alt="App logo" src="/public/logo.png" />
      </router-link>
      <h1>Cinema</h1>
    </div>
    <keep-alive>
      <router-view :genre="genre" :time="time" :movies="movies" :day="day._d" />
    </keep-alive>
  </div>
</template>

<script>
import Overview from "./components/Overview.vue";
import { checkFilter, setDay } from "./util/bus";

export default {
  name: "app",
  components: {
    Overview
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
    this.$bus.$on("set-day", setDay.bind(this));
  }
};
</script>
