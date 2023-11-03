<template>
  <div class="marginTop"></div>
    <div class="memberInfo">
      <h1 class="lineUp">Hey There, Join Us Today!</h1>
      <hr>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-6 text-center">
          <p>Are you a <span class="highlighted">fan of board games</span> and looking for a community that shares your passion? <br></p>
          <p>Do you want to be part of a <span class="highlighted">close knit and inclusive community</span> enjoying great company and greater games?<br></p>

          <h5>Join us and create lasting memories, share laughs, and build lifelong friendships through the magic of board games!</h5>

          <!-- Ready to roll the dice and make new friends? Don't miss out on the fun, camaraderie, and countless adventures waiting for you. Join us today! -->
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
            <div class="col-8">
                <div id="carouselexco" class="carousel slide mt-5" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/exco24.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/santorini.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/exco.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselexco" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselexco" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
              </div>
        </div>


      <div class="container-fluid">

      <div class="row align-items-center justify-content-center rowInfo">
          <div class="col-md-3 text-center dice-bg" style="height: 200px;">
              <span class="highlighted headerText">Benefits</span>
          </div>
          <div class="col-auto px-0">
            <ul>
              <li><h4>Free rental of over 100 board games</h4></li>
              <li><h4>CCA Records</h4></li>
              <li><h4>Diverse Game Library</h4></li>
              <li><h4>Community Welfare</h4></li>
              <li><h4>Game Teaching and Learning</h4></li>
              <li><h4>Weekly Game Nights</h4></li>
              
            </ul>
          </div>
      </div>

      <div class="row align-items-start justify-content-center" style="text-align: center;">
        <div class="col-lg-6 text-center">  
          <img src="../assets/dblue_pawn.png" class="tilted-img1">     
          <span class="highlighted headerText">Membership Requirements</span>
          <img src="../assets/dblue_pawn.png" class="tilted-img2">
        </div>
        </div>
        <div class="d-flex justify-content-center">
          <ul>
            <li><h4>$3 per semester</h4></li>
            <li><h4>$5 per academic year</h4></li>
            <li><h4>Attendance of 4 sessions</h4></li>
          </ul>
        </div>
   
  </div>

  </div>
  <div id="scrollHere">
        <h1 style="text-align: center; margin-top: 80px;">Ready to roll the dice?</h1>
  </div>
  <hr>

  <section id="paymentBox">
      <h1 style="text-align: center;">Pay for Membership</h1>
      <div>
              <h4 style="text-align: center;">You are paying for Strategica Membership</h4>
      </div>
      <div class="text-center" style="margin: 30px;">
        <input
          type="radio"
          id="termly"
          value="termly"
          v-model="selectedPaymentOption"
        />
        <label for="termly" style="margin-right: 30px;">Termly ($3)</label>

        <input
          type="radio"
          id="yearly"
          value="yearly"
          v-model="selectedPaymentOption"
        />
        <label for="yearly">Yearly ($5)</label>
    </div>
    <div class="container">
      <form id="payment-form" @submit.prevent="submitPayment">
        <div class="col-lg-8 offset-lg-2">
          <div class="p-2 mb-2 mx-auto">
            <input class="inputstl form-control" type="text" placeholder="Card Holder Name" required id="cardHolderName" v-model="cardHolderName">
          </div>
        </div>


        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div  class="p-2 mb-2">
              <input type="text" maxlength="19"
                placeholder="Card Number" class="inputstl form-control" required id="cardNumber" v-model="cardNumber">
            </div>
          </div>

          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="p-2 mb-2">
              <input type="text" placeholder="MM/YY"
                class="inputstl form-control" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" required
                id="expDate" maxlength="5" expDate="expDate" v-model="expDate">
            </div>
          </div>

          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="p-2 mb-2">
              <input type="text" placeholder="CVC"
                class="inputstl form-control" required id="CVC" v-model="CVC"> 
            </div>
          </div>
        </div>

          <!-- Error Message: Your card number is incomplete. -->
          <div id="error-message" class="alert alert-danger" style="display: none; width: 75%;"></div>
  
          <div style="margin: 5px; margin-top: 50px; text-align: center; font-size: 30px;">
              Total: {{ totalAmount }}
          </div>
          <div class="text-center"> <!-- Add text-center class here -->
              <button class="btn btn-outline-light mx-auto" id="checkout-button">
                  Pay
              </button>
          </div>
      </form>
  </div>

</section>


</template>

<script>
import Stripe from 'stripe';
import Global from '../global';
import $ from 'jquery';
const api_key = 'sk_test_51NyYaTGYkOKxngERwkOrjmZuFSaREnZRRxfZnI6KfuHWYuvFmw82UeU4P3wPfJhi7SIB7h9tpr8i0UYhlZVAmSFJ00BLexoChF';
const stripe = Stripe(api_key);


$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height() - 500;
  var tags = $("#paymentBox");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

export default{
  data(){
      return{
          cardNumber: "",
          expDate: "",
          CVC: "",
          cardHolderName: "",
          paymentIntentData: "",
          paymentIntentId: "",
          return_url: "http://localhost:8080/payPage/paymentSuccess",
          selectedPaymentOption: "yearly",
          paymentAmount: 500,
          loginStatus: Global.loginInfo,
          membershipStatus: Global.memberStatus,
          inViewport: false,

      }
  },
  created(){
    console.log(this.loginStatus)
    console.log(this.membershipStatus)
  },

  methods: {
  async createPaymentIntent() {
    try {
      this.paymentAmount = this.selectedPaymentOption == "yearly" ? 500 : 300


      const response = await stripe.paymentIntents.create({
        amount: this.paymentAmount, // Amount in cents
        currency: 'sgd',
        payment_method: "pm_card_visa",
      });

      console.log('Payment Intent created:', response);
      this.paymentIntentId = response.id

      // Now you can call a separate method to confirm the payment if needed
      this.confirmPayment(this.paymentIntentId);
    } catch (error) {
      console.error('Error creating Payment Intent:', error);
      throw error;
    }
  },
  async confirmPayment(paymentIntentId) {
    // Use the clientSecret to confirm the payment
    try {
      const result = await stripe.paymentIntents.confirm(
          paymentIntentId,
          { payment_method: "pm_card_visa",
          return_url: "http://localhost:8080/payPage/paymentSuccess",},
      );
      if (result.error) {
        // Handle payment error
        console.error('Payment confirmation error:', result.error);
        alert("Payment Failed, Please Try Again!")
      } else {
        // Payment is successful
        console.log('Payment confirmed successfully:', result);
        this.$router.push({ name: 'paymentSuccess' });
          

      }
    } catch (error) {
      console.error('Error confirming Payment:', error);
      alert("Payment Failed, Please Try Again!")
    }
  },
  submitPayment(){
      console.log("here")
      this.createPaymentIntent();
  },
  },
  computed: {
    totalAmount(){
      if (this.selectedPaymentOption == "yearly"){
        return "$5";
      } else if (this.selectedPaymentOption == "termly"){
        return "$3";
      }
      return "$0";
    }
  },
}


</script>

<style scoped>
.rowInfo{
  margin: 100px;
}

#paymentBox{
  width: 70%;
  margin: auto;
  opacity: 0;
  transform: translate(0, 10vh);
  transition: all 1s;
}

#paymentBox.visible {
  opacity: 1;
  transform: translate(0, 0);
}


.marginTop {
  height: 80px;
}

.lineUp {
  animation: 2s anim-lineUp ease-out;
  text-align: center;
  color: #070F5F;
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

.memberInfo{
  margin: auto;
}

.highlighted {  
    background: linear-gradient(transparent 40%, #070F5F 40%);
}

.headerText {
  font-size: 200%;
  font-weight: bold;
}

li{
  text-align: left;
}
.center-container {
      display: flex;
      justify-content: center;
      align-items: center;
}

.dice-bg {
    background-image: url(../assets/dice_2_bg.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;  
}

.tilted-img1{
  transform: rotate(-15deg);
  width: 10%;

}
.tilted-img2{
  transform: rotate(15deg);
  width: 10%;
}

.form-control {
        border:none;
        border-bottom: 2px solid white;
        /* background-color: rgb(255, 255, 255, 0.2);   */
        background-color: transparent;
        border-radius: 0px;
        color: white;
}

.inputstl {
        border: none;
        border-bottom: 2px solid white;
}

.form-control:focus {
        border-color: #070F5F;
        box-shadow: none;
        background-color: transparent;
        color: white;
}

.btn-outline-light {
    --bs-btn-hover-color: #7ba7bb;
    --bs-btn-active-color: var(--bs-btn-hover-color);
    width: 70%;
}
section{
  height: 50vh;
}
</style>