<template>
  <div class="footer px-0">
    <a href="#top" id="scrollToTopButton">
      <div class="dice-footer" style="text-align: end; ">
        <img src="../assets/dice_footer.png" style="width: 80px; height: auto; margin-right: 50px;">
        
      </div>
    </a>

    <p style="text-decoration: none; color: white; text-align: end; margin-right: 50px;">Back to Top!</p>

    <div class="nav mb-3 mx-0 justify-content-center">
      <a class="my-1 mx-3" href="" @click="gotoLanding()">Home</a>
      <router-link :to="{ name: 'aboutPage' }" class="my-1 mx-3">About Us</router-link>
      <!-- <a class="my-1 mx-3" href="" @click="gotoAbout()">About Us</a> -->
      <a class="my-1 mx-3" href="mailto:strategica@sa.smu.edu.sg">Contact Us</a>
    </div>
    
    <div class="logos mb-3">
      <a href="https://www.instagram.com/smu_strategica/" target="_blank">
        <img src="../assets/instagram_logo.png" class="logo img-fluid mx-2" alt="">
      </a>
      <a href="https://t.me/SMUStrategica" target="_blank">
        <img src="../assets/telegram_logo.png" class="logo img-fluid mx-2" alt="">
      </a>
      <a href="mailto:strategica@sa.smu.edu.sg" target="_blank">
        <img src="../assets/mail_logo.png" class="logo img-fluid mx-2" alt="">
      </a>
    </div>
    
    <div class="bottom d-inline text-center">
      <p style="color: white"> &copy; Strategica . 2023</p>
    </div>
  </div>

</template>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopButton = document.getElementById('scrollToTopButton');
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

export default {
  name: "footerBar",
  methods: {
    gotoLanding() {
      this.$router.push({ name: "landingPage" });
    },
    // gotoAbout() {
    //   this.$router.push({ name: "aboutPage" });
    // },
  },
};
</script>



<style>
.footer {
    width: 100%;
    padding: 70px 30px 20px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(78, 129, 152));
    color: black;
    margin-top: 100px;
}

.logos {
    display: flex;
    justify-content: center;
}

.nav {
    margin: 30px;
    font-size: 20px;
}

.nav a {
    margin: 40px;
    text-decoration: none;
    color: white;
    z-index: 1;
    display: block;
    position: relative;
   
    align-items: center;
    transition: all 300ms ease; /*cubic-bezier(0.075, 0.82, 0.165, 1);*/
}

.nav a:after {
  content: "";
  position: absolute;
  width: 0%;
  height: 1px;
  display: block;
  transition: all 0.3s ease;
  bottom: 25%;
  z-index: -1;
  background-color: #070F5F;
  left: -5%;
}
.nav a:hover::after {
  width: 110%;
  height: 12px;
  left: -5%;
  background-color: #070F5F;
  z-index: -1;
}

.logo {
    width: 30px;
    height: auto;
}
</style>