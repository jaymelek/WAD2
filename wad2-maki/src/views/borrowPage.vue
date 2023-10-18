<template>
  <!-- <div>
    <h1>Borrow a Game</h1>
  </div> -->

  <div class="container-fluid px-4 maxwidth">
    <div class="row justify-content-center">
        <div class="col-sm-auto col-md-6 col-lg-auto py-2 px-2" v-for="listing in listings" :key="listing.name" @click="gotoEvent(listing)">  
          <ListingCard
              :gameName="listing.name"
              :imgSrc = "listing.img"
              :description="listing.desc"
              :pax="listing.pax"
              :category="listing.type"
              :availability="listing.availability"
              @click="gotoEvent(listing)"
              :id="listing._listing_id"
            ></ListingCard>
        </div>
    </div>
  </div>

</template>

<script>
import { ref, onMounted } from 'vue'; // Import Vue composition API functions
import { app } from "../firebase/firebase";
import { getDatabase, ref as dbRef, get } from 'firebase/database';
import axios from 'axios';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';

import ListingCard from '../components/listingComponent.vue';

const firebaseDatabaseURL = 'https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app/';
const path = '/games.json'; // Replace with the path to your data

export default {
  name: "LandingPage",
  components: {
    ListingCard,
  },  
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

  methods: {
    gotoEvent(listing) {
                this.$router.push('/' + listing.id)
                this.$router.push({ name: 'viewGame', params: { gameID: listing.id } })
    }
  }

};

</script>

<style scoped>
  .maxwidth { /* DO NOT CHANGE THIS */
  width: 100%;
  max-width: 1200px;
  }
</style>
