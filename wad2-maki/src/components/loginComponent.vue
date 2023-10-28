<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input type="text" v-model="username" placeholder="Username" required>
            <button type="submit" @click="logData">Login</button>
        </form>
    </div>
</template>

<script>

export default{
    // name: loginComponent,
    data() {
        return {
            username: '',
        }
    },
    methods: {
        logData(){
            console.log(this.username);
            this.$router.push('../views/profilePage.vue')
        }
    }
}
</script>

<style></style>