<template>
  <div>
    <h1>Borrow a Game</h1>
  </div>

  <div class="container-fluid">
    <div class="row">
      <router-link to="'/games/' + games.slug" class="card-link col-lg-4 my-4" v-for="listing in listings" :key="listing.name" style="text-decoration: none;">
      <div class="card">
                <img :src="listing.img" class="card-img-top">    
                <div class="card-body">
                    <h4 class="card-title">{{ listing.name }}</h4>
                    <h6 class="card-text">{{  listing.desc }}</h6>
                </div>
        </div>
    </router-link>
    </div>
  </div>

</template>

<script>
import { ref, onMounted } from 'vue'; // Import Vue composition API functions
import { app } from "../firebase/firebase";
import { getDatabase, ref as dbRef, get } from 'firebase/database';
import axios from 'axios';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';


const firebaseDatabaseURL = 'https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app/';
const path = '/games.json'; // Replace with the path to your data

export default {
  data(){
    return{
      listings: [],

    }
  },
  created() {
  axios
    .get(firebaseDatabaseURL + path)
    .then((response) => {
      if (typeof response.data === 'object') {
        this.listings = response.data;

        // Initialize Firebase Storage
        const storage = getStorage();

        // Iterate through object properties using for...in loop
        for (const key in this.listings) {
          if (Object.prototype.hasOwnProperty.call(this.listings, key)) {
            const listing = this.listings[key];

            // Check if the listing has an 'img' property
            if (listing.img) {
              const imageRef = storageRef(storage, listing.img);
              getDownloadURL(imageRef)
                .then((url) => {
                  // Update the 'img' property of the listing with the new URL
                  this.listings[key].img = url;
                })
                .catch((error) => {
                  console.error('Error getting download URL for image:', error);
                });
            }
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

};

</script>
