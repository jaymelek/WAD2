<template>
    <div class="marginTop"></div>
    
    <div class="container maxwidth">
        <!-- <h1>This is the profile page!</h1> -->
        
        <div class="row mt-3 align-items-center justify-content-center">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 order-1 d-flex align-items-center">
                <img src="../assets/profile.png" class=" img img-fluid mx-auto">
            </div>
        
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 order-2 d-flex align-items-center">
                <p class="name">{{ person.name }}</p>
            </div>
        </div>
        <div class="row align-items-center justify-content-center">
            <div class="typewriter">
            <h1>Welcome back, {{ person.name }}</h1>
            </div>
            <div class="col-12 order-3 mt-3 ">
                <div class="info-border">
                    <p><strong>Email: </strong> {{ person.email }}</p>
                    <p><strong>Telegram: </strong>{{ person.telegram }} </p>
                    <p><strong>Membership Status: </strong>{{ person.membership }}</p>
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-content-center">
            <div class="col-12 order-5 mt-3">
                <div class="info-border">
                    <p><strong>Current borrowing: </strong></p>
                    <ul>
                        <li v-for="(game, index) in person.currentBorrowing" :key="index">{{ game }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-content-center">
            <div class="col-12 mt-3 order-4">
                <div class="info-border">
                    <p><strong>History of past games: </strong>
                    <ul>
                        <li v-for="(game, index) in person.historyGame" :key="index">{{ game }}</li>
                    </ul>
                    </p>
                    <p><strong>Favourite Games: </strong>
                    <ul>
                        <li v-for="(game, index) in person.favGame" :key="index">{{ game }}</li>
                    </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Global from "../global";

const firebaseDatabaseURL = 'https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app/';
const path = '/users.json'; // Replace with the path to your data

export default {
    data() {
        return {
            users: [],
            person: [],
            
        }
    },
    created() {
        console.log(Global.sharedData)
        axios
            .get(firebaseDatabaseURL + path)
            .then((response) => {
                if (typeof response.data === 'object') {
                    this.users = response.data;
                    // console.log(this.users)
                    // console.log(Object.keys(this.users))

                    // Iterate through object properties using for...in loop
                    for (const key in this.users) {
                        if (Object.prototype.hasOwnProperty.call(this.users, key)) {
                            //checks if the users is this user
                            if (key == Global.sharedData) {
                                this.person = this.users[key];  //append the respective user to the person array
                                console.log(this.person)

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
}
</script>

<style>
.name {
    font-size: 30px;
    margin: auto;
}

/* @media screen and (min-width: 768px) {
    .info-border {
        width: 50%;
    }
} */

.info-border {
    border: 1px;
    border-radius: 25px;
    background-color: #b0dde4;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    text-align: left;
    overflow: hidden;
    /* width: 50%; */
    /* max-width: 50%; */
    margin: auto;
}

.maxwidth {
    /* DO NOT CHANGE THIS */
    width: 100%;
    max-width: 600px;
}

.typewriter h1 {
  color: black;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #286fb4; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 20px; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #286fb4; }
}

.marginTop {
  height: 80px;
}

</style>