<!-- Beat -->

<!-- Template -->
<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-card-title>{{ gameName }}</v-card-title>
            </v-col>
            <v-col cols="5">
                <v-text>{{ gameDesc }}</v-text>
            </v-col>
        </v-row>
    </v-container>
</template>


<!-- Script -->
<script>
// Connection to Firebase
// import { ref, onMounted } from 'vue'; // Import Vue composition API functions
// import { app } from "../firebase/firebase";
// import { getDatabase, ref as dbRef, get } from 'firebase/database';
import axios from 'axios';

const firebaseDatabaseURL = 'https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app/';
const path = '/games.json'; // Replace with the path to your data



export default {
    // setup() {
    //     const firebaseData = ref(null);

    //     onMounted(async () => {
    //         try {
    //             const db = getDatabase(app);
    //             const databaseRef = dbRef(db, 'games');

    //             const snapshot = await get(databaseRef);

    //             if (snapshot.exists()) {
    //             const data = snapshot.val();
    //             firebaseData.value = data; // Update the data property with fetched data
    //             // console.log(firebaseData.value.bang_bullet);
    //             } else {
    //             console.log('No data available');
    //             }
    //         } catch (error) {
    //             console.error('Error reading data from Realtime Database:', error);
    //         }
    //     });

    //     return {
    //         firebaseData,
    //     };
    // },

    data() {
        return {
            gameData: {},
            gameID: "game-01",
            gameName: "", 
            gameDesc: "",
            gameImg: "",
            gameType: "",
            gamePax: "",
        };
    },

    methods: {
        getGameData() {
            axios.get(firebaseDatabaseURL + path)
            .then((response) => {
                const data = response.data;
                const gameID = this.gameID;
                this.gameData = data;
                this.gameName = data[gameID].name;
                this.gameDesc = data[gameID].desc;
                this.gameImg = data[gameID].img;
                this.gameType = data[gameID].type;
                this.gamePax = data[gameID].pax;
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        },
    },

    created() {
        this.getGameData();
    },
};
  
</script>


<!-- Style -->
<style>

</style>
