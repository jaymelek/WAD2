<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input type="email" v-model="email" placeholder="Username" required>
            <input type="password" v-model="password" placeholder="Password" required>
            <button type="submit" @click="userLogin()">Login</button>
        </form>
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

<style></style> 