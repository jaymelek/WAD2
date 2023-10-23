<!-- Beat -->

<!-- Script -->
<script>
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import footerBar from "../components/footerBar.vue";




// import navBar from '../components/navBar.vue';

export default {
    //components: {
    //navBar, // Register the navBar component
    //},
    components: {
        footerBar
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
    <navBar />

    <!-- Header Image -->
    <img src="../assets/strategica_header3.png" class="header rounded-start" alt="">
    <!-- End Header Image -->

    <!-- Carousell Start -->
    <div class="container-fluid">
        <div class="row carousel mx-auto mt-5">
            <div id="carouselExampleCaptions" class="slide mb-5" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="8000">
                        <img src="../assets/santorini.jpg" class="d-block w-100 img-fluid" alt="..." >
                        <div class="carousel-caption d-none d-md-block">
                            <h5></h5> <!-- Label for first slide -->
                            <p></p> <!-- text/caption -->
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <img src="../assets/exco.jpg" class="d-block w-50 img-fluid" alt="..."  >
                        <div class="carousel-caption d-none d-md-block">
                            <h5></h5> <!-- Label for second slide -->
                            <p></p> <!-- text/caption -->
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <img src="../assets/exco24.jpg" class="d-block w-100 img-fluid" alt="..." >
                        <div class="carousel-caption d-none d-md-block">
                            <h5></h5> <!-- Label for third slide -->
                            <p></p> <!-- text/caption -->
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <!-- Carousell End -->
        <div class="row">
            <div class="col d-flex justify-content-center fs-3 mb-5">
                <div class="fw-bold">Browse Popular</div>
            </div>
        </div>




        <div class="row overflow-hidden">
            <div class="col-md-4 col-sm-12 d-flex justify-content-center mb-3">
                <div class="card customcard" style="width: 500px; height: 500px;">
                    <img src="../assets/catan.png" class="card-img-top img-fluid m-auto" alt="...">
                </div>
            </div>
            <div class="col-md-4 col-sm-12 d-flex justify-content-center mb-3">
                <div class="card customcard" style="width: 500px; height: 500px;">
                    <img src="../assets/bang_bullet.png" class="card-img-top img-fluid m-auto" alt="...">
                </div>
            </div>
            <div class="col-md-4 col-sm-12 d-flex justify-content-center mb-3">
                <div class="card customcard" style="width: 500px; height: 500px;">
                    <img src="../assets/betrayal.png" class="card-img-top img-fluid m-auto" alt="...">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="gamedesc col-md-4 col-sm-12 d-flex justify-content-center">
                <p>Catan</p>
            </div>
            <div class="gamedesc col-md-4 col-sm-12 d-flex justify-content-center">
                <p>Bang Bullet</p>
            </div>
            <div class=" gamedesc col-md-4 col-sm-12 d-flex justify-content-center">
                <p>Betrayal</p>
            </div>
        </div>

        <footerBar />


    </div>
</template>



<!-- Style -->
<style scoped>
.carousel {
    padding: 0;
    width: 800px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    align-content: center;
    border-radius: 10px;
}

.customcard {
    border-radius: 10%;
    width: 2000px;
    height: 300px;
    margin-bottom: 0;
}

.header {
    width: 100%;
}

.gamedesc{
    font-size: 30px;
    font-weight: bold;
}
</style>