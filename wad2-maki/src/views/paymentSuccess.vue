<template>
  <div class="container mt-5">
    <div class="container-fluid text-center">
      <h1>Payment Success!</h1>
      <p>Thank you for your payment!</p>
      <p>Click <router-link :to="{ name: 'landingPage' }">here</router-link> to go back to the home page.</p>
    </div>

  </div>


</template>
  
<style scoped>
    .container-fluid {
      background-color: #f4f4f4;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      color: #070F5F;
    }

</style>
  