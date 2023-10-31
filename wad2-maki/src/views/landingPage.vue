
<template>
    <!-- Header Image -->
    <!-- <img src="../assets/strategica_header3.png" class="header rounded-start" alt=""> -->
    <!-- End Header Image -->

    <div class="img-container">
        <div class="banner">
        <div class="content">
            <h3>LET'S GET THE DICE ROLLING</h3>
            <a href="" class="btn">Borrow Your Game Now!</a>
        </div>
    </div>


    </div>



    <div class="container-fluid">

        <div class="row">
            <div class="gotw col d-flex justify-content-center m-5">
                <div class="fw-bold">GAMES OF THE WEEK</div>
            </div>
        </div>


        <div>
            <div class="row">
            <div class="col-md-4 col-sm-12" v-for="game in listings" :key="game.id">
                <router-link :to="{ name: 'viewGame', params: { gameID: game.id } } " style="text-decoration: none;">
                <div class="card customcard" style="width: 100%; height: 500px;">
                    <img :src="game.img" class="card-img-top img-fluid m-auto">
                    <h3 style="text-align: center; ">{{ game.name }}</h3>
                </div>
                </router-link>
            </div>
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
                <img src="../assets/slide1.jpeg" />
            </div>
            <div class="slide">
                <img src="../assets/photo1697619300.jpeg" />
            </div>
            <div class="slide">
                <img src="../assets/photo1697619346.jpeg" />
            </div>
            <div class="slide">
                <img src="../assets/slide1.jpeg" />
            </div>
            <div class="slide">
                <img src="../assets/photo1697619300.jpeg" />
            </div>
            <div class="slide">
                <img src="../assets/photo1697619346.jpeg" />
            </div>
        </div>
    </div>    


        <div class="reviews">
            <div class="review text-center" v-for="reviewInfo in reviews" :key="reviewInfo.name">
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

<script>
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import axios from 'axios';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';


const firebaseDatabaseURL = 'https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app/';
const path = '/games.json'; // Replace with the path to your data




// import navBar from '../components/navBar.vue';

export default {
    //components: {
    //navBar, // Register the navBar component
    //},
    name: "viewGame",

    mounted() {
        // Initialize the carousel when the component is mounted
        $('#carouselExampleCaptions');
    },

    data() {
        return {
            listings: [],
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
            ]
        }
    },
    created() {
    this.listings = [];
    axios
        .get(firebaseDatabaseURL + path)
        .then((response) => {
        if (typeof response.data === 'object') {
            const allListings = response.data;
            let count = 0;

            // Initialize Firebase Storage
            const storage = getStorage();

            // Iterate through object properties using for...in loop
            for (const key in allListings) {
            if (Object.prototype.hasOwnProperty.call(allListings, key)) {
                const listing = allListings[key];

                // Check if the listing has an 'img' property
                if (listing.img) {
                const imageRef = storageRef(storage, listing.img);

                getDownloadURL(imageRef)
                    .then((url) => {
                    // Update the 'img' property of the listing with the new URL
                    listing.img = url;

                    // Push the updated listing into the this.listings array
                    this.listings.push(listing);

                    })
                    .catch((error) => {
                    console.error('Error getting download URL for image:', error);
                    });
                } else {
                // If the listing has no image, push it into the this.listings array as is
                this.listings.push(listing);
                }

                // Increment the count
                count++;

                // Break the loop after pushing the top 3 listings
                if (count >= 3) {
                break;
                }
            }
            }
            console.log(this.listings);
        } else {
            console.error('Response data is not an object:', response.data);
        }
        })
        .catch((error) => {
        console.error('Error fetching data:', error);
        });
    },


};



</script>

<!-- Style -->
<style scoped>

.img-container{
    position: relative;
}

.customcard {
    border-radius: 10%;
    width: 2000px;
    height: 300px;
    margin-bottom: 0;
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
    width: 1000px;
    height: 800px;

}

.gotw {
    font-size: 50px;
}


.slider {
    height: 250px;
    margin: auto;
    position: relative;
    width: 90%;
    display: grid;
    place-items: center;
    min-height: 100vh;
    display: grid;
    place-items: center;
    overflow: hidden;
    margin-top: 100px;
}

.slide-track {
    display: flex;
    width: calc(450px *8);
    animation: scroll 40s linear infinite;
}

.slide {
    height: auto;
    width: 450px;
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
        transform: translateX(calc(-300px * 4));
    }
}

.banner {
    width: 100%;
    height: 150vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(../assets/boardgamecover.jpg);
    background-size: cover;
    background-position: center;
    position: relative;
}

.content {
    width: 100%;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    text-align: center;
    color: #fff;

}

.content h3 {
    font-size: 50px;
    margin-top: 80px;
}



.btn {
    font-size: 18px;
    font-weight: bold;
    background: transparent;
    /* border: 2px solid #fff;; */
    width: 300px;
    color: #fff;
    cursor: pointer;
}
</style>

