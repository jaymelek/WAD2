<template>
    <div class="marginTop"></div>

    <div class="container maxwidth" v-if="loginUser == true">
        <!-- <h1>This is the profile page!</h1> -->

        <div class="row mt-3 align-items-center justify-content-center">
            <!-- <div class="col col-12 col-sm-12 col-md-12 col-lg-12 order-1 d-flex align-items-center">
                <img src="../assets/profile.png" class=" img img-fluid mx-auto">
            </div> -->

        </div>
        <div class="row align-items-center justify-content-center">
            <div class="lineUp">
                <h1>Welcome back, {{ person.name }}</h1>
            </div>
            <div class="col-12 order-3 mt-3 ">
                <div class="info-border">
                    <p><strong>Email: </strong> {{ person.email }}</p>
                    <p><strong>Telegram: </strong>{{ person.telegram }} </p>
                    <p v-if="person.membership == '2'"><strong>Membership Status: </strong>Executive Committee</p>
                    <p v-else-if="person.membership == '1'"><strong>Membership Status: </strong>You are a member!</p>
                    <p v-else-if="person.membership == '0'"><strong>Membership Status: You are not a member! </strong></p>

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
    <!-- <login /> -->
    <div v-if="loginUser == false">
        <div class="banner">
            <div id='login-form' class='login-page'>
                <div class="form-box">
                    <div class="button-box">
                        <h3 class="loginheader">Log In</h3>
                    </div>
                    <form id="login" class="input-group-login" @submit.prevent="userLogin">
                        <input type="email" v-model="email" class="input-field" placeholder="Email Address" required>
                        <input type="password" v-model="password" class="input-field" placeholder="Enter Password" required>
                        <button type="submit" class="submit-btn" @click="userLogin">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import Global from "../global";
// import login from "./loginPage.vue";

const firebaseDatabaseURL = 'https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app/';
const path = '/users.json'; // Replace with the path to your data

export default {
    // components: {
    //     login
    // },
    data() {
        return {
            users: [],
            person: [],
            loginUser: '',

        }
    },
    created() {
        // console.log(Global.sharedData)
        // console.log(Global.loginInfo)
        // console.log(this.loginUser)
        // console.log(Global.personArr)

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
                                this.person.loginStatus = true;

                                // Global.loginInfo = this.person.loginStatus;
                                Global.memberStatus = this.person.membership;
                                // console.log(Global.memberStatus)
                                // console.log(Global.loginInfo)
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
    methods: {
        userLogin() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user)

                    if (user !== null) {
                        // console.log(user.uid)
                        if (Object.keys(this.users).includes(user.uid)) {
                            this.person = this.users[user.uid]
                            // console.log(this.person)
                            Global.sharedData = user.uid;
                            Global.loginInfo = true;
                            this.loginUser = true;
                            // this.$router.push("profilePage")
                            // console.log(Global.sharedData)
                            // console.log(Global.loginInfo)
                        }
                    }

                })

                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                });
        }
    }
}
</script>

<style>
.name {
    font-size: 30px;
    margin: auto;
}

.lineUp {
    animation: 2s anim-lineUp ease-out;
    text-align: center;
}

@keyframes anim-lineUp {
    0% {
        opacity: 0;
        transform: translateY(80%);
    }

    20% {
        opacity: 0;
    }

    50% {
        opacity: 1;
        transform: translateY(0%);
    }

    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}

/* @media screen and (min-width: 768px) {
    .info-border {
        width: 50%;
    }
} */

.info-border {
    border: 1px;
    border-radius: 25px;
    background-color: #070F5F;
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


.marginTop {
    height: 80px;
}
</style>