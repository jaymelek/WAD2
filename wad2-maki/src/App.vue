<!-- Import All Needed Components -->

<!-- Template -->
<template>
  <navBar/>
  <router-view></router-view>
  <footerBar/>
</template>

<script>
import navBar from "./components/navBar.vue";
import 'bootstrap/dist/css/bootstrap.css';
import footerBar from "./components/footerBar.vue";

export default {
  name: 'App',
  components: {
    navBar,
    footerBar
  },

}


</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

#app {
  font-family: 'rubik', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: #7ba7bb;
}


</style>
