<template>
    <div class="container maxwidth text-center" v-if="loginUser == true">
        <!-- <h1>This is the profile page!</h1> -->
        <div class="marginTop"></div>

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
        <!-- <div class="row align-items-center justify-content-center">
            <div class="col-12 order-5 mt-3">
                <div class="info-border">
                    <p v-if=!person.currentBorrowing><strong>Current borrowing: - </strong></p>
                    <div v-else>
                        <p><strong>Current borrowing: </strong></p>
                        <ul>
                            <li v-for="(game, index) in person.currentBorrowing" :key="index">{{ game }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="row align-items-center justify-content-center">
            <div class="col-12 mt-3 order-4">
                <div class="info-border">
                    <p v-if=!person.historyGame><strong>History of past games: - </strong></p>
                    <div v-else>
                        <p><strong>History of past games: </strong></p>
                        <ul>
                            <li v-for="(game, index) in person.historyGame" :key="index">{{ game }}</li>
                        </ul>
                    </div>
                    <p v-if=!person.favGame><strong>Favourite Games: - </strong></p>
                    <div v-else>
                        <p><strong>Favourite Games:  </strong></p>
                        <ul>
                            <li v-for="(game, index) in person.favGame" :key="index">{{ game }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Borrow Applications -->
        <div class="row align-items-center justify-content-center">
            <div class="col-12 mt-3 order-4">
                <h4>Borrow Applications:</h4>
            </div>
        </div>

        <div class="row align-items-center justify-content-center"
        v-if="!person.borrowApplications"
        >
            <div class="col-12 mt-3 order-4">
                <div class="info-border text-center">
                    <p><strong>You have no applications!</strong></p>
                </div>
            </div>
        </div>

        <div class="container-fluid w-100 p-0">

            <div class="row info-border w-100 py-2 px-0 mx-0 my-2 align-items-center justify-content-center text-start"
                v-for="application in person.borrowApplications" :key="application.applicationID"
                >
                    <div class="row info-border w-100 py-2 mx-0 mt-2 mb-0 align-items-center justify-content-between">
                        <div class="col-auto">
                            <h4 class="mb-0" @click="gotoEvent(application.gameID)">{{ application.gameName }}</h4>
                        </div>

                        <div class="col-auto">
                            <!-- Each application is a form  -->
                            <div class="bg-success statusBar px-3 ms-auto"
                            v-if="application.status == 'Approved'"
                            >
                                {{ application.status }}
                            </div>
                            <div class="bg-danger statusBar px-3 ms-auto"
                            v-if="application.status == 'Rejected'"
                            >
                                {{ application.status }}
                            </div>
                            <div class="bg-warning statusBar px-3 ms-auto"
                            v-if="application.status == 'Pending'"
                            >
                                {{ application.status }}
                            </div>
                        </div>
                    </div>
                
                    <div class="row info-border w-100 py-2 mx-0 mt-0 mb-2 px-1 justify-content-center">
                        <div class="col-12 col-sm-6">
                            <p class="my-0">Borrower: {{ application.borrowerName }}</p>
                            <p class="my-0">Start Date: {{ pretty_date(application.loanStartDate) }}</p>
                            <p class="my-0">End Date: {{ pretty_date(application.loanEndDate) }}</p>
                        </div>
                        
                        <div class="col-12 col-sm-6">
                            <p class="my-0">Borrowing Type: For {{ application.borrowingBehalf }}</p>
                            <p class="my-0">Borrower's Email: {{ application.borrowerEmail }}</p>
                            <p class="my-0">Borrower's Telegram: {{ application.borrowerTelegram }}</p>
                        </div>
                    </div>
                    
                    <!-- if club borrowing -->
                    <div class="row rounded reviewBox w-100 py-2 mx-0 mt-0 mb-2 justify-content-center"
                    v-if="application.borrowingBehalf == 'Club'"
                    >
                        <hr>
                        <div class="col-6">
                            <p class="my-0">Club Contact: {{ application.borrowerClubContact }}</p>
                            <p class="my-0">Location: {{ application.borrowerLocation }}</p>
                            <p class="my-0">Purpose: {{ application.borrowerPurpose }}</p>
                        </div>
                        
                        <div class="col-6">
                            <p class="my-0">Type of Players: For {{ application.borrowerWhoPlay }}</p>
                            <p class="my-0">Club Email: {{ application.borrowerClubEmail }}</p>
                        </div>
                    </div>
                </div> 
                <!--End of v-for loop-->

        </div>


        <!-- Logout Button -->
        <button class="btn btn-outline-light w-50 my-4" @click="userLogout">
            Logout
        </button>
    </div>
    <!-- <login /> -->
    <div v-if="loginUser == false">

        <div class="banner1">
            <div id='login-form' class='container-fluid login-page'>
                <div class="row justify-content-center px-3 pt-5">
                    <div class="col-sm-auto form-box px-5">
                        <h3 class="loginheader">Log In</h3>
                        <form id="login" class="input-group-login" @submit.prevent="userLogin">
                            <input type="email" v-model="email" class="input-field" placeholder="Email Address" required>
                            <input type="password" v-model="password" class="input-field" placeholder="Enter Password"
                                required>
                            <p class="error-message">{{ loginErrorMessage }}</p>
                            <button type="submit" class="submit-btn" @click="userLogin">Log In</button>

                            <router-link :to="{ name: 'registerPage' }" style="text-decoration: none;">
                                <a class="nav-link register" aria-current="page" :style="fontColor"><span
                                        class="conHighlighted">Don't
                                        have
                                        an account? Register now!</span></a>
                            </router-link>

                        </form>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>


<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import Global from "../global";

const firebaseDatabaseURL = 'https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app/';
const path = '/users.json'; // Replace with the path to your data
// const applicationsPath = '/borrowApplications.json'

// let hasReloaded = false;

export default {
    data() {
        return {
            users: [],
            person: [],
            loginUser: Global.loginInfo,
            loginErrorMessage: '',
            myApplications: [],

        }
    },
    created() {
        // console.log(Global.sharedData)
        console.log(Global.loginInfo)
        // console.log(this.loginUser)
        
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

                                Global.loginInfo = this.person.loginStatus;

                                // Global.memberStatus = this.person.membership;
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

            // this.getApplicationsData()
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
                            Global.memberStatus = this.person.membership;

                            // console.log(Global.memberStatus)
                            // this.$router.push("profilePage")
                            // console.log(Global.sharedData)
                            console.log(Global.loginInfo)
                            console.log(Global.memberStatus)
                        }
                    }

                })

                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                    this.loginErrorMessage = "Invalid Username/Password";
                });
        },
        userLogout() {
            this.loginUser = false;
            Global.loginInfo = this.loginUser;
            this.email = '';
            this.password = '';
            Global.memberStatus = 0;
            Global.sharedData = false;

            this.scrollToTop()

            console.log(this.loginUser)
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },

        // getApplicationsData() {
        //     axios
        //     .get(firebaseDatabaseURL + applicationsPath)
        //     .then((response) => {
        //         console.log(response.data)
                
        //         // initiate application data 
        //         for (let app in response.data) {
        //             console.log(response.data[app].borrowerName)
        //             console.log(this.person)
        //             if (response.data[app].borrowerName == this.person.name) {
                        
        //                 this.myApplications.push(response.data[app]);
        //             } 
        //         }
                
        //     })
        //     .catch((error) => {
        //     console.error('Error fetching applications data:', error);
        //     });
        // },

        pretty_date(ugly_date) {
            var pretty_date = new Date(ugly_date);
            return pretty_date.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        },

        gotoEvent(listingid) {
            this.$router.push('/' + listingid)
            this.$router.push({ name: 'viewGame', params: { gameID: listingid } })
        },
    },
}


</script>

<style scoped>
.lineUp {
    animation: 2s anim-lineUp ease-out;
    text-align: center;
    color: #070F5F;
}

.register {
    font-size: 15px;
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

.banner1 {
    width: 100%;
    height: 150vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(123, 167, 187, 0.1), rgba(123, 167, 187, 1)), url(../assets/dice_2_bg.png);
    background-size: 20% auto;
    background-position: center;
    position: relative;
}

#login-form {
    max-width: 400px;
}


.form-box {
    width: 100%;
    /* height: 400px; */
    position: relative;
    top: 40px;
    margin: auto;
    background: #fff;
    padding: 10px;
    /* overflow: hidden; */
    border-radius: 20px;

}

h3 {
    /* width: 220px; */
    margin: 35px auto;
    position: relative;

}



.input-group-login {
    top: 150px;
    /* position:absolute; */
    /* width: 280px; */
    /* transition: .5s; */

}


.input-field {
    width: 100%;
    padding: 10px 0;
    margin: 5px 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(123, 167, 187, 1);
    outline: none;
    background: transparent;
}

.input-field::placeholder {
    color: rgba(123, 167, 187, 1);
}

.submit-btn {
    width: 85%;
    padding: 10px 30px;
    cursor: pointer;
    display: block;
    margin: 25px auto;
    background: rgba(123, 167, 187, 1);
    border: 0;
    outline: none;
    border-radius: 30px;
    color: #fff;

}

#login {
    left: 50px;
}

#login input {
    color: rgba(123, 167, 187, 1);
    font-size: 15;
}


.loginheader {
    color: rgba(123, 167, 187, 1);
    text-align: center;
}

.reviewBox {
        color: #7ba7bb;
        background-color: #d8e5eb;
    }
</style>