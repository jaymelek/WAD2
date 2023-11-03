<template>
    <div v-if="loginStatus == false">
        <div class="banner">
            <div id='login-form' class='login-page'>
                <div class="form-box">
                    <h3 class="loginheader">Log In</h3>
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
            loginStatus: Global.loginInfo,


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
                        if (Object.keys(this.users).includes(user.uid)) {
                            this.person = this.users[user.uid]
                            // console.log(this.person)
                            Global.sharedData = user.uid;
                            Global.loginInfo = true;
                            this.loginStatus = true;
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
// }
// }
</script>

<style scoped>
.banner {
    width: 100%;
    height: 150vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(123, 167, 187, 0.1), rgba(123, 167, 187, 1)), url(../assets/dice_2_bg.png);
    background-size: 20% auto;
    background-position: center;
    position: relative;
}


.form-box {
    width: 380px;
    height: 400px;
    position: relative;
    top: 20px;
    margin: auto;
    background: #fff;
    padding: 10px;
    overflow: hidden;
    border-radius: 20px;

}

h3 {
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
</style>