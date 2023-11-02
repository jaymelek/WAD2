<template>

    <nav class="navbar navbar-expand-sm fixed-top" :style="navbarBackgroundColor">
    <div class="container-fluid">
      <!-- <div class="marginTop"></div> -->
      <router-link :to="{ name: 'landingPage' }" >
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" style="width: 100px; height: auto;">
        </a>
      </router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li :class="[{'nav-item-active': isActive('borrowPage')}, 'hover-effect']">
            <router-link :to="{ name: 'borrowPage' }" style="text-decoration: none;">
              <a class="nav-link" aria-current="page" :style="fontColor"><span class="highlighted">Borrow a Game</span></a>
            </router-link>
          </li>
          <li :class="[{'nav-item-active': isActive('payPage')}, 'hover-effect']">
            <router-link :to="{ name: 'payPage' }" style="text-decoration: none;">
              <a class="nav-link" aria-current="page" :style="fontColor"><span class="highlighted">Be a Member</span></a>
            </router-link>
          </li>
        </ul>
      </div>

      <div>
        <ul class="profileUl">
          <li :class="{ 'profile-item-active': isActive('profilePage') }">
            <router-link :to="{ name: 'profilePage' }" style="text-decoration: none;">
              <a class="nav-link profile-hover-effect" aria-current="page" :style="fontColor">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill profileIcon" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
              </a>
            </router-link>
          </li>
        </ul>
      </div>

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
  width: 25px;
  height: 25px;
  margin: 5px;
  
}

.profileUl {
  list-style-type: none;
}

/* For Profile Hover and Active Effects */

.profile-hover-effect {
  margin: 5px;
  text-decoration: none;
  color: white;
  display: inline-block;
  position: relative;
  align-items: center;
  transition: all 300ms ease;
  border-radius: 50%;
  padding: 10px;
  overflow: hidden; /* Add overflow to contain the hover circle */
}

.profile-hover-effect:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  transition: all 0.3s ease;
  background-color: #070F5F;
  border-radius: 50%;
  top: 0; 
  left: 0;
  transform: scale(0); /* Initial size, hidden */
  transform-origin: center;
  z-index: -1;
}

.profile-hover-effect:hover::after {
  transform: scale(1); /* Scale up to full size on hover */
}

.profile-item-active .profile-hover-effect {
  background-color: rgba(7,15,95) ;
  border-radius: 50%; 
}

/* For Other Hover and Active Effects */

.hover-effect {
    margin: 0px;
    text-decoration: none;
    color: white;
    z-index: 1;
    display: block;
    position: relative;
   
    align-items: center;
    transition: all 300ms ease; /*cubic-bezier(0.075, 0.82, 0.165, 1);*/
}

.hover-effect:after {
  content: "";
  position: absolute;
  width: 0%;
  height: 1px;
  display: block;
  transition: all 0.3s ease;
  bottom: 20%;
  z-index: -1;
  background-color: #070F5F;
  left: -1%;
  color: white;
}

.hover-effect:hover::after {
  width: 102%;
  height: 16px;
  left: -1%;
  background-color: #070F5F;
  z-index: -1;
  color: white;
}

.hover-effect .highlighted {
  /* padding: 0 10px 0px 10px; */
  color: white;
}

.nav-item-active .highlighted {
  /* background: linear-gradient(transparent 40%, #070F5F 40%);
  display: inline-block;  */
  /* padding: 0 10px 0px 10px; */
  text-decoration: underline 2.5px;
  text-decoration-color: #070F5F;
  color: white;
}


navbar{
  padding: 0;
}

.marginTop {
  height: 2px;
}


</style>