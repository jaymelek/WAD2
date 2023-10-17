<!-- Import All Needed Components -->

<!-- Template -->
<template>
  <navBar />
  <router-view></router-view>
</template>

<script>
import navBar from "./components/navBar.vue";
import 'bootstrap/dist/css/bootstrap.css';
// import footerBar from "./components/footerBar.vue";


export default {
  name: 'App',
  components: {
    navBar,
    // footerBar
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
