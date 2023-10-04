<!-- Beat -->

<!-- Script -->
<script>
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import navBar from '../components/navBar.vue';

export default {
    components: {
    navBar, // Register the navBar component
  },
  mounted() {
    // Initialize the carousel when the component is mounted
    $('#carouselExampleCaptions');
  },
};
</script>

<!-- Template -->
<template>
    <!-- Nav Bar -->
    <navBar/>

    <!-- Header Image -->
    <img src="../assets/strategica_header.jpg" class="img-fluid rounded-start" alt="">
    <!-- End Header Image -->

    <!-- Carousell Start -->
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="8000">
        <img src="../assets/santorini.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5></h5> <!-- Label for first slide -->
            <p></p> <!-- text/caption -->
        </div>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
        <img src="../assets/exco.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5></h5> <!-- Label for second slide -->
            <p></p> <!-- text/caption -->
        </div>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
        <img src="../assets/exco24.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5></h5> <!-- Label for third slide -->
            <p></p> <!-- text/caption -->
        </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    <!-- Carousell End -->
    
</template>



<!-- Style -->
<style scoped>

</style>