<template>
  <div id="app">
    <!-- Header content -->
    <header>

    </header>


    <!-- Navigation Bar content-->
    <nav class="navbar navbar-light border-bottom border-dark">
      <div class="container-fluid">
        <router-link :to="{ name: 'testPage' }">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.png" class="rounded-circle" width="50" height="50" alt="">  <i>Ondeh Ondeh</i>
          </a>
        </router-link>
          <a class="navbar-brand" href="#">
          <img src="./assets/logo.png"  class="rounded-circle" width="50" height="50" alt="">
        </a>
      </div>
    </nav>

    <main>
        <!-- Contains the main content of the webpage-->
      <div>
        <!-- Router View to display components based on routes -->
        <router-view></router-view>
      </div>

    </main>

  </div>

</template>



<script>
import { createRouter, createWebHistory } from 'vue-router';
import testPage from './views/testPage.vue';

export default {
  name: 'App',
  methods: {
  },

  // Configure the Vue Router instance
  router: createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        // Define your routes here
        {
          path: '/',
          name: 'testPage',
          component: testPage, // Example: Import your Home component
        },
      ],
    }),
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
