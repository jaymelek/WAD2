<template>

    <nav class="navbar navbar-expand-sm fixed-top" :style="navbarBackgroundColor">
    <div class="container-fluid">
      <router-link :to="{ name: 'landingPage' }" >
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" style="width: 100px; height: auto;">
        </a>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li :class="{ 'nav-item-active': isActive('borrowPage') }">
          <router-link :to="{ name: 'borrowPage' }" style="text-decoration: none;">
            <a class="nav-link hover-effect" aria-current="page" :style="fontColor">Borrow a Game</a>
          </router-link>
        </li>
        <li :class="{ 'nav-item-active': isActive('payPage') }">
          <router-link :to="{ name: 'payPage' }" style="text-decoration: none;">
            <a class="nav-link hover-effect" aria-current="page" :style="fontColor">Be a Member</a>
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
              <a class="dropdown-item hover-effect" style="text-decoration: none !important;">Profile</a>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'loginPage' }" style="text-decoration: none;">
              <a class="dropdown-item hover-effect" style="text-decoration: none !important;">Login</a>
            </router-link>
          </li>
        </ul>

    </div>
  </nav>

  

</template>


<script>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Global from "../global";


window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar'); // Select your navbar element
    const scrollPosition = window.scrollY; // Get the current scroll position

    // Set a threshold scroll position where the class should toggle
    const thresholdPosition = 200; // Adjust this value as needed

    // Check if the scroll position has passed the threshold
    if (scrollPosition > thresholdPosition) {
        navbar.classList.remove('fixed-top'); // Remove the "fixed-top" class
    } else {
        navbar.classList.add('fixed-top'); // Add the "fixed-top" class
    }
});


export default {
  methods: {
    logoutUser() {
      Global.sharedData = null;
      // console.log(Global.sharedData) 
    },
    isActive(routeName) {
      return this.$route.name === routeName;
    }
  },
  computed: {
      navbarBackgroundColor() {
        const routeMeta = this.$route.meta;
        return {
        backgroundColor: routeMeta.backgroundColor || 'transparent',
        color: routeMeta.color || 'white',
        paddingTop: routeMeta.padding-top || '0px',
        }
      },
      fontColor(){
        const routeMeta = this.$route.meta;
        return {
        color: routeMeta.color || 'white',
        }
      }
    },
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

.hover-effect:hover{
  background-color: rgba(7,15,95,0.5) ;
  border-radius: 10px;
}

navbar{
  padding: 0;
}

.nav-item-active {
  background-color: rgba(7,15,95,0.5) ;
  border-radius: 10px; /* Change this to the desired active color */
}


</style>