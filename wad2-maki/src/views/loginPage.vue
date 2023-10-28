<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input type="text" v-model="username" placeholder="Username" required>
            <button type="submit" @click="login">Login</button>
        </form>
    </div>
    <!-- <loginComponent></loginComponent> -->
</template>

<script>
export default {
    data() {
        return {
            username: '',
        }
    },
    methods: {
        login(){
            console.log(this.username);
            this.$router.push('/profilePage')
        }
    }
    // components: {
    //     loginComponent
    // }
    // data() {
    //     return {
    //         // email: '',
    //         // password: '',
    //         username: '',
    //         users: [],
    //         user: [],
    //     };
    // },
    // methods: {
    //     login() {
    //         // console.log(this.username)
    //         // this.$router.push('/profilePage');
    //         axios
    //             .get(firebaseDatabaseURL + path)
    //             .then((response) => {
    //                 // console.log(response)
    //                 // console.log(this.username)
    //                 if (typeof response.data === 'object') {
    //                     this.users = response.data
    //                     // console.log(this.users)
    //                     for (const key in this.users) {
    //                         // console.log(key)
    //                         if (Object.prototype.hasOwnProperty.call(this.users, key)) {
    //                             if (key == this.username) {
    //                                 this.user = this.users[key];
    //                                 // console.log(this.user)
    //                                 this.$router.push('/profilePage');
    //                             }
    //                         }

    //                     }

    //                 }
    //             })
    //     },
    // }

}
</script>

<style></style>