<template>
    <div class="banner">
        <div id='register-form' class='register-page'>
            <div class="form-box">
                <div class="button-box">
                    <h3 class="registerheader">Register</h3>
                </div>
                <form id="register" class="input-group-register" @submit.prevent="register">
                    <input type="text" v-model="name" class="input-field" placeholder="Your Name" required>
                    <input type="text" v-model="telegram" class="input-field" placeholder="Telegram Username" required>
                    <input type="email" v-model="email" class="input-field" placeholder="Email Address" required>
                    <input type="password" v-model="password1" class="input-field" placeholder="Enter Password" required>
                    <input type="password" v-model="password2" class="input-field" placeholder="Confirm Password" required>
                    <button type="submit" @click="register" class="submit-btn">Register</button>
                </form>
            </div>

        </div>
    </div>

    <!-- <loginComponent></loginComponent> -->
</template>

<script>
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// const firebaseConfig = {
//   apiKey: "AIzaSyByBwnq_ExHDl-TwwIDb4PrSomTDyp0E10",
//   authDomain: "wad2-proj-642be.firebaseapp.com",
//   projectId: "wad2-proj-642be",
//   storageBucket: "wad2-proj-642be.appspot.com",
//   messagingSenderId: "104140066907",
//   appId: "1:104140066907:web:9fb31d0e04d1b5cf042f7e",
//   databaseURL: "https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app"
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
import app from "../firebase/firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const auth = getAuth();
const database = getDatabase(app);

export default {
    data() {
        return {
            email: '',
            password1: '',
            password2:'',
            telegram: '',
            name: '',
        }
    },
    methods: {
        register() {
            console.log(this.email);
            console.log(this.password);
            this.$router.push('/loginPage')


            createUserWithEmailAndPassword(auth, this.email, this.password2)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    set(ref(database, 'users/' + user.uid), {
                        email: this.email,
                        name: this.name,
                        telegram: this.telegram
                    })
                    console.log(user)
                    alert('Account Created!')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)

                    alert(errorMessage);
                    // ..
                });
        }
    }

}
</script>


<style>
.banner {
    width: 100%;
    height: 150vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(../assets/boardgamecover.jpg);
    background-size: cover;
    background-position: center;
    position: relative;
}


.form-box {
    width: 380px;
    height: 480px;
    position: relative;
    top: 40px;
    margin: auto;
    background: rgba(0, 0, 0, 0.3);
    padding: 10px;
    overflow: hidden;

}

.button-box {
    width: 220px;
    margin: 35px auto;
    position: relative;

}

.input-group-register {
    top: 120px;
    position: absolute;
    width: 280px;
}

.input-field {
    width: 100%;
    padding: 10px 0;
    margin: 5px 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid #999;
    outline: none;
    background: transparent;
}

.submit-btn {
    width: 85%;
    padding: 10px 30px;
    cursor: pointer;
    display: block;
    margin: 20px auto;
    background: #F3C693;
    border: 0;
    outline: none;
    border-radius: 30px;

}

#register {
    left: 50px;
}

#register input {
    color: white;
    font-size: 15;
}

.registerheader{
    color: #999;
    text-align: center;
}
</style>