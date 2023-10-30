<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link :to="{ name: 'landingPage' }">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" style="width: 100px; height: auto;">
        </a>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="router-link" :to="{ name: 'borrowPage' }">
              <a class="nav-link active" aria-current="page" href="#">Borrow</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="router-link" :to="{ name: 'demoPage' }" >
              <a class="nav-link active" aria-current="page" href="#">Demo</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="router-link" :to="{ name: 'payPage' }">
              <a class="nav-link active" aria-current="page" href="#">Pay</a>
            </router-link>
          </li>
        </ul>
      </div>

      <a class="nav-link" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
        </a>
        
        <ul class="dropdown-menu dropdown-menu-end custom-dropdown" aria-labelledby="userDropdown">
          <li>
            <router-link :to="{ name: 'profilePage' }" style="text-decoration: none;">
              <a class="dropdown-item" style="text-decoration: none !important;">Profile</a>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'loginPage' }" style="text-decoration: none;">
              <a class="dropdown-item" style="text-decoration: none !important;">Login</a>
            </router-link>
          </li>
        </ul>

    </div>
  </nav>

</template>


<script>
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default {}
</script>

<style>
.router-link {
  text-decoration: none;
  color: black;
}

.nav-item {
  text-align: start;
}

.profile {
  margin-left: 50px;
  margin-right: 50px;
}

.profileIcon {
  width: 40px;
  color: black;
}

@media (min-width: 576px) {
  .custom-dropdown {
    width: max-content;
  }
}

/* CSS for smaller screens (when collapsed) */
@media (max-width: 575px) {
  .custom-dropdown {
    width: 100%; /* Full width */
  }
}


</style>