<template>
  <div id="movie-filter">
    <h2>Filter results</h2>
    <h3>By time of day</h3>
    <div class="filter-group">
      <check-filter
        v-for="time in times"
        category="time"
        :key="time"
        :title="time"
      />
    </div>
    <h3>By genre</h3>
    <div class="filter-group">
      <check-filter
        v-for="genre in genres"
        category="genre"
        :key="genre"
        :title="genre"
      />
    </div>
  </div>
</template>
<script>
import genres from "../util/genres";
import times from "../util/times";
import CheckFilter from "./CheckFilter.vue";

export default {
  components: {
    CheckFilter
  },
  data() {
    return {
      genres,
      times
    };
  }
};
</script>