<script>
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import axios from 'axios';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';


const firebaseDatabaseURL = 'https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app/';
const path = '/games.json'; // Replace with the path to your data




// import navBar from '../components/navBar.vue';

export default {
    
    name: "viewGame",

    mounted() {
        // Initialize the carousel when the component is mounted
        $('#carouselExampleCaptions');
    },

    data() {
        return {
            listings: [],
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

<!-- Template -->
<template>
    <div class="container-fluid">

        <!-- First Row: Strategica Banner with dice background -->
        <div class="row">
            <div class="col px-0">
                <div class="imgbox">
                    <div class="banner">
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid maxWidth">
            <!-- Second row:  Slogan and Group of Games Image-->
            <div class="row align-items-center justify-content-center">
                <div class="col-md-6 pl-md-5 text-center">
                    <h1 class="sloganText">Never <span class="highlighted">Bored</span> 
                    <br> with <span class="highlighted">Board</span> Games</h1>
                    <h4>SMU Strategica is SMU's premiere board game club, boasting over 150 board games hosted at our weekly game nights every Friday!</h4>
                </div>
                <div class="col-auto px-0">
                    <img src="../assets/games_group.png" class="imgFit">
                </div>
            </div>

            <!-- Third Row: What we do -->
            <div class="row align-items-center justify-content-center mb-4">
                <div class="col-md-6 px-sm-5 dice-bg text-center">
                    <h1 class="sloganText"><span class="highlighted">What do we do?</span> </h1>
                    <h4>We hold weekly sessions on <span class="coloured">Friday Evenings: 6.30-9pm</span>, open to all! Watch out for our weekly EDMs over email and our telegram channel.
                        Members are also invited to our annual Strategica Retreat and can loan our board games for free!
                        <br> Interested?
                        <br> <span class="coloured">Join us today!</span>
                    </h4>
                </div>
            </div>

            <!-- Fourth Row: Autoscrolling EDMs -->
            <div class="row align-items-center justify-content-center ">
                <div class="col px-0">
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
                </div>
            </div>

            <!-- Fifth Row: Past Events Pictures, Interested in a collab? -->



        </div> <!-- End of Container -->
        
    </div>
    

    
        
</template>



<!-- Style -->
<style scoped>

@keyframes scroll {
    0% {
        transform: translateX(0)
    }

    100% {
        transform: translateX(calc(-300px * 4));
    }
}

.banner {
    max-width: 100vw;
    max-height: 50vh;
    margin:auto;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(123, 167, 187, 0.1),  rgba(123, 167, 187, 1)), url(../assets/strategica_header.jpg); /* linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),  */
} 

.imgbox {
    display: grid;
    height: 100%;
}

.sloganText {
    font-size: 50px;
    font-weight: bold;
}

.highlighted {  
    background: linear-gradient(transparent 40%, #070F5F 40%);
}

.underlined {
    text-decoration: underline;
    text-decoration-color: #070F5F;
}

.coloured {
    color: #070F5F;
}

.maxWidth {
    max-width: 1200px;
}

.imgFit {
    width: 100%;
    max-width: 450px;
    height: 100%;
    object-fit: cover;
}

.dice-bg {
    background-image: url(../assets/dice_2_bg.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;    
}

.whatDoDiv {
    max-width: 500px;
}

/* Autoscrolling EDM Classes */
.slider {
    height: 250px;
    margin: auto;
    position: relative;
    width: 100%;
    display: grid;
    place-items: center;
    min-height: 70vh;
    display: grid;
    overflow: hidden;
    margin-top: 0px;
}

.slide-track {
    display: flex;
    width: calc(450px *8);
    animation: scroll 40s linear infinite;
}

.slide {
    max-height: 250px;
    width: auto;
    display: flex;
    align-items: center;
    padding: 0px;
}

.slide img {
    width: 85%;
    max-height: 80vh;
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

</style>

