<template>
  <div id="movie-filter">
    <h2>Filter results</h2>
    <div class="filter-group">
      <check-filter
        v-for="genre in genres"
        :key="genre"
        :title="genre"
        @check-filter="checkFilter"
      />
    </div>
  </div>
</template>
<script>
import CheckFilter from "./CheckFilter.vue";
import genres from "../util/genres";
export default {
  components: {
    CheckFilter
  },
  methods: {
    checkFilter(category, title, checked) {
      this.$emit("check-filter", category, title, checked);
    }
  },
  data() {
    return {
      genres
    };
  }
};
</script>