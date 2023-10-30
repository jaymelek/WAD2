<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <router-link :to="{ name: 'landingPage' }">
            <a class="navbar-brand" href="#">
              <img src="../assets/logo.png" style="width: 100px; height: auto;">
            </a>
          </router-link>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="router-link" :to="{ name: 'borrowPage' }">
                <a class="nav-link active" aria-current="page" href="#">Borrow</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="router-link" :to="{ name: 'demoPage' }">
                <a class="nav-link active" aria-current="page" href="#">Demo</a>
              </router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="router-link" :to="{ name: 'feedbackPage' }">
                <a class="nav-link active" aria-current="page" href="#">Feedback</a>
              </router-link>
            </li> -->
            <li class="nav-item">
              <router-link class="router-link" :to="{ name: 'payPage' }">
                <a class="nav-link active" aria-current="page" href="#">Pay</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="router-link" :to="{ name: 'loginPage' }">
                <a class="nav-link active" aria-current="page" href="#">Login</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="router-link" :to="{ name: 'profilePage' }">
                <a class="nav-link active" aria-current="page" href="#">Profile<i
                    class="bi bi-person-circle profileIcon"></i></a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="router-link" :to="{ name: 'landingPage' }">
                <a @click="logoutUser()" class="nav-link active" aria-current="page" href="#">Logout<i
                    class="bi bi-person-circle profileIcon"></i></a>
              </router-link>
            </li>
          </ul>
          <!-- <form class="d-flex align-items-center justify-content-center" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
            <router-link class="router-link" :to="{ name: 'reviewPage' }">
              <a class="nav-link active profile" aria-current="page" href="#" title="Click here to login!">Login
              </a>
            </router-link>
          </form> -->

        </div>
      </div>
    </nav>
    <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
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
                          <router-link class="router-link" :to="{ name: 'demoPage' }">
                              <a class="nav-link active" aria-current="page" href="#">Demo</a>
                          </router-link>
                      </li>
                      <li class="nav-item">
                          <router-link class="router-link" :to="{ name: 'feedbackPage' }">
                              <a class="nav-link active" aria-current="page" href="#">Feedback</a>
                          </router-link>
                      </li>
                      <li class="nav-item">
                          <router-link class="router-link" :to="{ name: 'payPage' }">
                              <a class="nav-link active" aria-current="page" href="#">Pay</a>
                          </router-link>
                      </li>
                      <li class="nav-item">
                          <router-link class="router-link" :to="{ name: 'reviewPage' }">
                              <a class="nav-link active" aria-current="page" href="#">Reviews</a>
                          </router-link>
                      </li>
                  </ul>
                  <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
              </div>
          </div>
      </nav> -->

</template>

<script>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Global from "../global";

export default {
  methods: {
    logoutUser() {
      Global.sharedData = null;
      // console.log(Global.sharedData) 
    }
  }
}
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
</style>