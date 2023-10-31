<template>
  <div class="container mt-5">
    <div class="container-fluid text-center">
      <h1>Payment Success!</h1>
      <p>Thank you for your payment!</p>
      <p>Click <router-link :to="{ name: 'landingPage' }" class="router">here</router-link> to go back to the home page.</p>
    </div>

  </div>


</template>
  
<style scoped>
.container-fluid{
  border: 1px solid #286fb4;
  border-radius: 5px;
  width: 70%;
  margin: auto;
  padding: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2) ;
  color: #286fb4;
}

.router{
  color: #df4c73;
  text-decoration: none;

}

.router:hover{
  color: #286fb4;

}


</style>
  