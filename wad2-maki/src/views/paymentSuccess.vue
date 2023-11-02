<template>
  <div class="marginTop"></div>
  <div class="wrapper"> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
  </svg>
  </div>
  <div class="container mt-5">
    <div class="container-fluid text-center">
      <span class="highlighted">Payment Success!</span>
      <h4>Thank you for your payment!</h4>
      <h4>Click <router-link :to="{ name: 'landingPage' }" class="router">here</router-link> to go back to the home page.</h4>
    </div>

  </div>


</template>
  
<style scoped>
.container-fluid{

  color: white;
}

.marginTop {
  height: 80px;
}
.router{
  color: #070F5F;
  text-decoration: none;

}
.highlighted {  
    background: linear-gradient(transparent 40%, #070F5F 40%);
    font-size: 200%;
    font-weight: bold;
    color: white;
}
.router:hover{
  color: white;

}

  
.checkmark__circle{
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards}
  
  .checkmark{width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 10px auto;
    box-shadow: inset 0px 0px 0px #7ac142;
    animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both}
    
    .checkmark__check{transform-origin: 50% 50%;
      stroke-dasharray: 48;stroke-dashoffset: 48;
      animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards}
      
    @keyframes stroke{100%{stroke-dashoffset: 0}}
    
    @keyframes scale{0%, 100%{transform: none}50%{transform: scale3d(1.1, 1.1, 1)}}
  
  @keyframes fill{100%{box-shadow: inset 0px 0px 0px 30px #7ac142}}
</style>
  