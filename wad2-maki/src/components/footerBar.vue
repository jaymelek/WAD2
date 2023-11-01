<template>
    <div class="footer bg-transparent">
        <a href="#top" id="scrollToTopButton">
        <img src="../assets/dice_footer.png" style="float:right; width: 80px; height: auto; margin-right: 50px;">
        </a>

        <div class="nav mb-3 justify-content-center">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
        </div>
        <div class="logos mb-3">
            <a href="https://www.instagram.com/smu_strategica/?hl=en">
                <img src="../assets/instagram_logo.png" class="logo img-fluid mx-3" alt="">
            </a>
            <a href="https://t.me/SMUStrategica">
                <img src="../assets/telegram_logo.png" class="logo img-fluid-mx-3" alt="">
            </a>
        </div>
        <div class="bottom d-inline text-center">
            <p> &copy; Strategica . 2023</p>
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
</script>



<style>
.footer {
    width: 100%;
    padding: 70px 30px 20px;
    background-color: white;
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
    color: black;
}

.nav a:hover {
    color: blue;
}

.logo {
    width: 50px;
    height: auto;
}
</style>