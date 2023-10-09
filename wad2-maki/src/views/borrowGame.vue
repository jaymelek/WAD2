<!-- Beat -->

<!-- Template -->
<template>
    
    <!-- Start of Content -->
    <div class="container-fluid">
        <div class="row align-items-center justify-content-center m-2"> 
            <div class="col-md-6 pe-0 pb-4 justify-content-center">
                <!-- <img :src="listing.img" class=" w-75 bg-secondary-subtle rounded" >  -->
                <div id="gameCarousel" class="carousel slide w-75 bg-secondary-subtle rounded">
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

            <div class="col-md-6 ">
                <h3 >Borrow <span class="bolded">{{ listing.name }}</span></h3>
                <input type="date" class="form-control" id="date" 
                placeholder="Date" 
                required 
                v-bind:max="maxDate" 
                v-bind:min="currentDate"
                >
                <br>
                <input type="text" placeholder="Name" class="form-control" id="name" required>
                <br>
                <button type="button" class="btn btn-outline-secondary w-100"
                @click="confirmBorrow(listing)"
                >Confirm</button>
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
        currentDate: new Date().toISOString().split('T')[0],
        }; 
    },

    computed: {
        maxDate() {
        // Get the current date
        const currentDate = new Date();

        // Calculate the date 2 weeks (14 days) in the future
        const maxDate = new Date(currentDate);
        maxDate.setDate(currentDate.getDate() + 14);

        // Format the date as YYYY-MM-DD (required format for the 'max' attribute)
        const formattedMaxDate = maxDate.toISOString().split('T')[0];

        return formattedMaxDate;
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

        

    },

    created() {
        this.getGameData();
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
        height: auto;
    }

    .colWidth {
        width: 100%;
        max-width: 800px;
    }
</style>
