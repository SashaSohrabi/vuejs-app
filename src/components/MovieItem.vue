<template>
  <div class="movie">
    <div class="movie-col-left">
      <router-link :to="path">
        <img :src="movie.Poster" />
      </router-link>
    </div>
    <div class="movie-col-right">
      <div class="movie-title">
        <router-link :to="path">
          <h2>{{movie.Title}}</h2>
        </router-link>

        <span class="movie-rating">{{movie.Rated}}</span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["movie"],
  data() {
    return {
      path: `/movie/${this.movie.imdbID}`
    };
  }
};
</script>