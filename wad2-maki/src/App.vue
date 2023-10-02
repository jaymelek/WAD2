<template>

<!-- Navigation Bar content-->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link :to="{ name: 'testPage' }">
    <a class="navbar-brand" href="#">
      <img src="./assets/logo.png" style="width: 100px; height: auto;">
      </a>
    </router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{ name: 'borrowPage' }">
          <a class="nav-link active" aria-current="page" href="#">Borrow</a>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<main>
    <!-- Contains the main content of the webpage-->
  <div>
    <!-- Router View to display components based on routes -->
    <router-view></router-view>
  </div>

</main>



</template>



<script>
import { createRouter, createWebHistory } from 'vue-router';
import testPage from './views/testPage.vue';
import borrowPage from './views/borrowPage.vue';
import 'bootstrap/dist/css/bootstrap.css';

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

        {
          path: '/',
          name: 'borrowPage',
          component: borrowPage, // Example: Import your Home component
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
}
</style>
