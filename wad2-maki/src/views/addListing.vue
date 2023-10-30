<template>

    <div class="container my-5">
    <div class="text-center">
        <h1 class="">Add a New Game Listing</h1>
    </div>
    
    <hr>
        <div class="container">
            <div class="form-group">
                <label>Game Name</label>
                <input v-model="gameName" type="email" class="form-control" placeholder="Enter Game Name" style="margin-bottom: 15px;">
            </div>
            
            <div>
                <label for="exampleFormControlTextarea1" style="margin-top: 10px;">Game Description</label>
                <textarea v-model="gameDescription" class="form-control" rows="6"></textarea>
            </div>

            <div>
                <label for="exampleFormControlTextarea1" style="margin-top: 15px;">Number of Players</label>
                <input type="number" class="form-control" v-model="gamePax">
            </div>

            <div>
                <label for="exampleFormControlTextarea1" style="margin-top: 15px;">Type</label>
                <input type="text" class="form-control" v-model="gameType">
            </div>
            <div>
                <label for="exampleFormControlTextarea1" style="margin-top: 15px;">Upload Game Image</label>
                <br>
                <input type="file" @change="uploadImage"/>
            </div>
            <br>
            <button class="btn" style="background-color:#070F5F ; color: white;" v-on:click="validateAndSubmit">Create</button>

        </div>
    </div>

    


</template>

<script>
import axios from 'axios';
import 'firebase/storage';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import Firebase Storage methods

const firebaseDatabaseURL = 'https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app/';
const allGamesPath = '/games.json';

export default {
    name: 'addListing',
    data() {
      return {
        gameName: '',
        gameDescription: '',
        gamePax: '',
        gameType: '',
        NewImageURL: '',
        gameID: '',
        oldID: '',
      };
    },
    methods: {
        async uploadImage(event) {
            const file = event.target.files[0];
            const storage = getStorage();
            const storageRef = ref(storage, file.name);

            try {
            await uploadBytes(storageRef, file);
            const imageUrl = await getDownloadURL(storageRef);
            this.NewImageURL = imageUrl;
            console.log('Image uploaded:', imageUrl);
            } catch (error) {
            console.error('Error uploading image:', error);
            }
        },
      validateAndSubmit() {
      if (!this.gameName || !this.gameDescription || !this.gamePax || !this.gameType) {
        // Show the dialog if any required fields are empty
        alert('Please fill in all required fields.');
      } else {
        // All required fields are filled, proceed with form submission
        this.createGame();
      }
    },
    createGame() {
    // Make an initial request to get the count of games in the database
    axios
        .get(firebaseDatabaseURL + allGamesPath)
        .then((response) => {
        if (typeof response.data === 'object') {
            const gamesCount = Object.keys(response.data).length;

            // Format the count to be zero-padded
            const formattedCount = `0${(gamesCount + 1)}`.slice(-2);

            // Create the gameID using the formatted count
            const gameID = `game-${formattedCount}`;
            this.gameID = gameID;

            const data = {
            name: this.gameName,
            availability: "Available",
            desc: this.gameDescription,
            pax: this.gamePax,
            type: this.gameType,
            img: this.NewImageURL,
            gameID: this.gameID,
            
            };

            // Post the data to the database
            axios
            .post(firebaseDatabaseURL + allGamesPath, data)
            .then((response) => {
                console.log('Data posted successfully:', response);
                // Reset form fields or perform any other actions as needed
                this.oldID = response.data.name;
                this.updateGameID();
            })
            .catch((error) => {
                console.error('Error posting data:', error);
            });
            } else {
                console.error('Response data is not an object:', response.data);
            }
            })
            .catch((error) => {
            console.error('Error fetching data:', error);
            });

        },
        updateGameID() {
        // Create an object with the new gameID
        const updatedData = {
            gameID: this.oldID,
        };

        // Use the current gameID (this.gameID) to locate the record you want to update
        axios.patch(`${firebaseDatabaseURL}/games/${this.oldID}.json`, updatedData)
            .then((response) => {
            console.log('Data updated successfully:', response);
            // Reset form fields or perform any other actions as needed
            })
            .catch((error) => {
            console.error('Error updating data:', error);
            });
        },

}
  };
  </script>