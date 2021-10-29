<template>
  <div id="app">
    <HeaderNav/>
    <MovieSearch />
  </div>
</template>

<script>
import MovieSearch from './components/MovieSearch.vue'
import HeaderNav from "@/components/HeaderNav";

export default {
  name: 'app',
  components: {
    HeaderNav,
    MovieSearch
  }
}
</script>

<style>

</style>
