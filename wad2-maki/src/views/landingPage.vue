<!-- Beat -->

<!-- Script -->
<script>
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';





// import navBar from '../components/navBar.vue';

export default {
    //components: {
    //navBar, // Register the navBar component
    //},

    mounted() {
        // Initialize the carousel when the component is mounted
        $('#carouselExampleCaptions');
    },

    data() {
        return {
            listing: {},
            gameID: this.$route.params.gameID,
            reviews: [{
                title: "Great Game! Would Recommend!",
                name: "Dudette McReview",
                review: "I love this game! It's so fun! Played with my friends and we had a blast! Would recommend!",
                rating: 5,
                date: "2022-10-01",
            },
            {
                title: "Its alright, so so only :)",
                name: "Daniella YF",
                review: "The game is not in that great condition, and the cards are yellowing a little so we could tell what card each person held based on the condition. But overall, it was a fun game to play with my friends!",
                rating: 3,
                date: "2021-03-23",
            },
            {
                title: "Its alright, so so only :)",
                name: "Daniella YF",
                review: "The game is not in that great condition, and the cards are yellowing a little so we could tell what card each person held based on the condition. But overall, it was a fun game to play with my friends!",
                rating: 3,
                date: "2021-03-23",
            },
            {
                title: "Its alright, so so only :)",
                name: "Daniella YF",
                review: "The game is not in that great condition, and the cards are yellowing a little so we could tell what card each person held based on the condition. But overall, it was a fun game to play with my friends!",
                rating: 3,
                date: "2021-03-23",
            },
            {
                title: "Its alright, so so only :)",
                name: "Daniella YF",
                review: "The game is not in that great condition, and the cards are yellowing a little so we could tell what card each person held based on the condition. But overall, it was a fun game to play with my friends!",
                rating: 3,
                date: "2021-03-23",
            },
            ]
        }
    },
};



</script>

<!-- Template -->
<template>
    <!-- Header Image -->
    <img src="../assets/strategica_header3.png" class="header rounded-start" alt="">
    <!-- End Header Image -->

    <!-- <div id="carouselexco" class="carousel slide mt-5 rounded" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/exco24.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../assets/santorini.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../assets/exco.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselexco"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselexco"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div> -->

    <!-- Carousell Start -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div id="carouselexco" class="carousel slide mt-5" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/exco24.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/santorini.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/exco.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselexco" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselexco" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="gotw col d-flex justify-content-center m-5">
                <div class="fw-bold">GAMES OF THE WEEK</div>
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
    </div>
    <div class="slider">


        <div class="slide-track">

            <div class="slide">
                <img src="../assets/photo1697619300.jpeg" />
            </div>
            <div class="slide">
                <img src="../assets/photo1697619346.jpeg" />
            </div>
            <div class="slide">
                <img src="../assets/photo1697619300.jpeg" />
            </div>
            <div class="slide">
                <img src="../assets/photo1697619346.jpeg" />
            </div>
            <div class="slide">
                <img src="../assets/photo1697619300.jpeg" />
            </div>
            <div class="slide">
                <img src="../assets/photo1697619346.jpeg" />
            </div>
            <div class="slide">
                <img src="" />
            </div>
            <div class="slide">
                <img src="" />
            </div>
            <div class="slide">
                <img src="" />
            </div>

            <div class="slide">
                <img src="" />
            </div>
            <div class="slide">
                <img src="" />
            </div>
            <div class="slide">
                <img src="" />
            </div>
            <div class="slide">
                <img src="" />
            </div>
            <div class="slide">
                <img src="" />
            </div>
            <div class="slide">
                <img src="" />
            </div>
            <div class="slide">
                <img src="" />
            </div>
            <div class="slide">
                <img src="" />
            </div>
            <div class="slide">
                <img src="" />
            </div>
        </div>
    </div>


    <div class="reviews">
        <div class="review text-center" v-for="reviewInfo in reviews" :key="reviewInfo.name">
            <div class="head-review">
                <img class="review-img" src="" width="250px">
            </div>
            <div class="body-review">
                <div class="name-review">{{ reviewInfo.name }}</div>
                <div class="rating">
                    <img src="../assets/star.png" class="star" alt="" v-for="n in reviewInfo.rating" :key="n">
                </div>
                <div class="desc-review">{{ reviewInfo.review }}</div>
            </div>
        </div>




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

.gamedesc {
    font-size: 30px;
    font-weight: bold;
}

.reviews {
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap;

}

.review {
    margin: 0 1rem;
    min-width: 300px;
    flex: 1;
}

.head-review {
    margin: 1.75rem auto;
    width: 150px;
    height: 150px;
}

.review-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.body-review {
    background-color: rgb(238, 238, 238);
    padding: 2.5rem;
    box-shadow: 2px 2px 10px 3px rgb(225, 225, 225);
}

.name-review {
    font-size: 1.5rem;
    color: rgb(50, 50, 50);
    margin-bottom: .25rem;
}

.rating {
    color: rgb(253, 180, 42);
    margin: 1rem 0;
}

.desc-review {
    line-height: 1.5rem;
    letter-spacing: 1px;
}

#carouselexco {
    width: 1400px;
    height: 800px;

}

#carouselexco .carousel-item img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.gotw {
    font-size: 50px;
}

.slider {
    min-height: 100vh;
    display: grid;
    place-items: center;
    overflow: hidden;
}

.slider {
    height: 250px;
    margin: auto;
    position: relative;
    width: 90%;
    display: grid;
    place-items: center;
}

.slide-track {
    display: flex;
    width: calc(500px *18);
    animation: scroll 40s linear infinite;
}

.slide {
    height: auto;
    width: 2000px;
    display: flex;
    align-items: center;
    padding: 15px;
}

.slide img {
    width: 100%;
}

.slider::before,
.slider::after {
    content: '';
    height: 100%;
    position: absolute;
    width: 15%;
    z-index: 2;
}

.slider::before {
    left: 0;
    top: 0;
}

.slider::after {
    right: 0;
    left: 0;
    transform: rotateZ(100deg);
}

@keyframes scroll {
    0% {
        transform: translateX(0)
    }

    100% {
        transform: translateX(calc(-300px * 9));
    }
}
</style>