<!-- Import All Needed Components -->

<!-- Template -->
<template>
  <navBar />
  <router-view></router-view>
  <!-- <viewGame /> -->
</template>

<script>
import navBar from "./components/navBar.vue";
import 'bootstrap/dist/css/bootstrap.css';
// to be deleted
// import viewGame from "./views/viewGame.vue";

export default {
  name: 'App',
  components: {
    navBar
  },
  // methods: {
  // },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
