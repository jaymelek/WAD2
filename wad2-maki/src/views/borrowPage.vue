<template>
  <!-- <div>
    <h1>Borrow a Game</h1>
  </div> -->
  <div class="marginTop"></div>

  <div class="container-fluid px-4 maxwidth" >
    <div class="row justify-content-center">
      <div class="col-auto">
        <h2 class="featuredText"> <span class="highlighted">Featured This Month: Unfair + ABDW + CHKO Expansions!</span></h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4 col-sm-6 ">
        <img src="../assets/unfair.jpg" class="img-fluid rounded-start imgClass" alt="">
      </div>
      <div class="col-sm-6 order-sm-first align-self-center">
        Unfair gets bigger and better with the new Comicbook, Hacker, Kaiju and Ocean theme packs, all new Solo mode, and Unfair add-ons!
        With 14 modular theme packs, its replayability is through the roof!
        <br>
        Build the best theme park in town now with Unfair!
        <br>
        Up to 5 players, 60-150 minutes
        <br>
        <button class="btn btn-outline-light w-100 my-2" onclick="window.location.href='https://www.unfair-game.com/'">
          Learn More
        </button>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-auto col-md-6 col-lg-auto py-2 px-2" v-for="listing in listings" :key="listing.name"
        @click="gotoEvent(listing)">
        <ListingCard :gameName="listing.name" :imgSrc="listing.img" :description="listing.desc" :pax="listing.pax"
          :category="listing.type" :availability="listing.availability" @click="gotoEvent(listing)"
          :id="listing._listing_id"></ListingCard>
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
  name: "borrowPage",
  components: {
    ListingCard,
  },
  data() {
    return {
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
.maxwidth {
  /* DO NOT CHANGE THIS */
  width: 100%;
  max-width: 1200px;
}

.marginTop {
  height: 80px;
}

.featuredText {
  /* font-size: 3vw; */
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}

.highlighted {  
  background: linear-gradient(transparent 40%, #070F5F 40%);
}

.btn-outline-light {
  --bs-btn-hover-color: #7ba7bb;
  --bs-btn-active-color: var(--bs-btn-hover-color);
}

</style>