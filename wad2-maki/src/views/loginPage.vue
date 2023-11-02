<template>
    <div>
        <div class="banner">
            <div id='login-form' class='login-page'>
                <div class="form-box">
                    <div class="button-box">
                        <h3 class="loginheader">Log In</h3>
                    </div>
                    <form id="login" class="input-group-login"  @submit.prevent="userLogin">
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
// import { getAuth } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import Global from "../global";

const firebaseDatabaseURL = 'https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app/';
const path = '/users.json'; // Replace with the path to your data

export default {
    
    data() {
        return {
            email: '',
            password: '',
            users: [],
            person: [],

        }
    },
    created() {
        axios
            .get(firebaseDatabaseURL + path)
            .then((response) => {
                if (typeof response.data === 'object') {
                    this.users = response.data;
                    // console.log(this.users)
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
                        if (Object.keys(this.users).includes(user.uid)){
                            // this.person = this.users[user.uid]
                            // console.log(this.person)
                            Global.sharedData = user.uid;
                            this.$router.push("profilePage")
                            console.log(Global.sharedData)
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
// }
// }
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



.input-group-login {
    top: 150px;
    position: absolute;
    width: 280px;
    transition: .5s;
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
    margin: auto;
    background: #F3C693;
    border: 0;
    outline: none;
    border-radius: 30px;

}

#login {
    left: 50px;
}

#login input {
    color: white;
    font-size: 15;
}


.loginheader{
    color: #999;
    text-align: center;
}
</style>