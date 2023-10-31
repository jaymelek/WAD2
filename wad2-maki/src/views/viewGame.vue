<!-- Beat -->

<!-- Template -->
<template>
    
    <!-- Start of Content -->
    <div class="container-fluid colWidth">
        <div class="row align-items-center justify-content-center mx-2 my-4"> 

            <!-- Carousel of Game Images (NOT Dynamic to show all images of a game in the database yet)-->
            <!-- Need to make listing.img a list and v-for loop through it -->
            <div class=" col-sm-4 col-8 col-md-4 pe-0 pb-4"> 
                <div id="gameCarousel" class="carousel slide w-100 bg-secondary-subtle rounded">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src="listing.img" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img :src="listing.img" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img :src="listing.img" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#gameCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#gameCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <!-- Game Details -->
            <div class="col-sm-6 col-md-8"> <!--col-md-auto-->
                <h3 >{{ listing.name }}</h3>
                <i class="bi bi-person-circle"></i>
                <p class="text-start">{{ listing.desc }}</p>
                <p class="text-start"><span class="bolded">Game Category:</span> {{ listing.type }}</p>
                <p class="text-start"><span class="bolded">Max Players:</span> {{ listing.pax }}</p>
                <p class="text-start"><span class="bolded">Availability:</span> {{ listing.availability }}</p>
                <!-- <p class="text-start"><span class="bolded">Category:</span> {{ listing.category }}</p> -->
                <button type="button" class="btn btn-outline-secondary w-100"
                @click="borrowGame(listing)"
                >Borrow Game</button>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col colWidth">
                <h1 class="text-start">Reviews</h1>
                <div class="container-fluid w-100 p-0">
                    <div class="row rounded bg-secondary-subtle w-100 py-2 mx-0 my-2 justify-content-center"
                    v-for="reviewInfo in reviews" :key="reviewInfo.name"
                    >
                        <div class="col-9">
                            <h4 class="text-start mb-0">{{ reviewInfo.title }}</h4> 
                            <p class="text-start text-body-secondary subtext my-0">{{ reviewInfo.name }}</p>
                        </div>
                        <div class="col-3">
                            <img src="../assets/star.png" class="star float-end" alt=""
                            v-for="n in reviewInfo.rating"
                            :key="n"
                            >
                        </div>
                        <p class="text-start my-1">{{ reviewInfo.review }}</p>
                        <p class="text-end text-body-secondary subtext m-0">Posted on: {{ reviewInfo.date }}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>


<!-- Script -->
<script>
// Connection to Firebase
import { ref, onMounted } from 'vue'; // Import Vue composition API functions
import { app } from "../firebase/firebase";
import { getDatabase, ref as dbRef, get } from 'firebase/database';
import axios from 'axios';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const firebaseDatabaseURL = 'https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app/';
const path = '/games.json'; // Replace with the path to your data


export default {
    setup() {
        const firebaseData = ref(null);
        
        onMounted(async () => {
            try {
                const db = getDatabase(app);
                const databaseRef = dbRef(db, 'games');
                
                const snapshot = await get(databaseRef);
                
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    firebaseData.value = data; // Update the data property with fetched data
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error reading data from Realtime Database:', error);
            }
        });
        
        return {
            firebaseData,
        };
    },
    
    // data() {
        //     return {
            //         gameData: {},
            //         gameID: "game-01",
            //         gameName: "", 
            //         gameDesc: "",
            //         gameImg: "",
            //         gameType: "",
            //         gamePax: "",
            //     };
            // },
            
            data(){
                return{
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
                ]
            }
        },
        
        methods: {
            getGameData() {
                // axios.get(firebaseDatabaseURL + path)
                // .then((response) => {
                    //     const data = response.data;
                    //     const gameID = this.gameID;
                    //     this.gameData = data;
                    //     this.gameName = data[gameID].name;
                    //     this.gameDesc = data[gameID].desc;
                    //     this.gameImg = data[gameID].img;
                    //     this.gameType = data[gameID].type;
                    //     this.gamePax = data[gameID].pax;
                    //     console.log(data);
                    // })
                    // .catch((error) => {
                        //     console.error('Error fetching data:', error);
                        // });
                        
                        axios
                        .get(firebaseDatabaseURL + path)
                        .then((response) => {
                            if (typeof response.data === 'object') {
                                this.listing = response.data[this.gameID];
                                
                                // Initialize Firebase Storage
                                const storage = getStorage();
                                
                                
                                if (Object.prototype.hasOwnProperty.call(this.listing, "img")) {
                                    const listing = this.listing;
                                    console.log(listing.img)
                                    
                                    // Check if the listing has an 'img' property
                                    if (listing.img) {
                                        const imageRef = storageRef(storage, listing.img);
                                        getDownloadURL(imageRef)
                                        .then((url) => {
                                            // Update the 'img' property of the listing with the new URL
                                            this.listing.img = url;
                                        })
                                        .catch((error) => {
                                            console.error('Error getting download URL for image:', error);
                                        });
                                    }
                                }
                                
                            } else {
                                console.error('Response data is not an object:', response.data);
                            }
                        })
                        .catch((error) => {
                            console.error('Error fetching data:', error);
                        });
                    },
                    
                    borrowGame(listing) {
                        console.log(listing);
                        this.$router.push({ name: 'borrowGame', params: { gameID: listing.id } });
                    },
                    
                },
                
                created() {
                    this.getGameData();
                    window.scrollTo(0, 0)
                },
                
                mounted() {
                    // Initialize the carousel when the component is mounted
                    $('#gameCarousel');
                },
            };
            
        </script>


<!-- Style -->
<style>
    .bolded {
        font-weight: bold;
    }

    .subtext {
        font-size: 0.8rem;
    }

    .star {
        width: 20%;
        max-width: 25px;
        /* min-width: 15px; */
        height: auto;
    }

    .colWidth {
        width: 100%;
        max-width: 800px;
    }
</style>
