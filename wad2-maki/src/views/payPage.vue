<template>
  <div class="marginTop"></div>
    <div class="memberInfo">
      <h1 class="lineUp">Hey There, Join Us Today!</h1>
      <hr>
      <div class="center-container">
        <div class="memberMsg col-md-10 col-lg-6">
        <p>Are you a fan of board games and looking to be part of a community that shares your passion? If so, we have an exciting opportunity for you! We are thrilled to invite you to join our SMU Strategica, where we are dedicated to creating an inclusive, close-knit community of board game enthusiasts who enjoy great company and even better games. <br> <br>

        Join us and be a part of something truly special. Together, we'll create lasting memories, share laughs, and build lifelong friendships through the magic of board games.<br> <br>

        Ready to roll the dice and make new friends? Don't miss out on the fun, camaraderie, and countless adventures waiting for you. Join us today!</p>
        </div>

      </div>


      <div class="container-fluid maxWidth">

      <div class="row align-items-center justify-content-center rowInfo">
          <div class="col-md-3 text-center">
              <span class="highlighted">Benefits</span>
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
      <div class="col-lg-6">
        <span class="highlighted">Membership Requirements</span>
        <ul>
          <li><h4>$3 per semester</h4></li>
          <li><h4>$5 per academic year</h4></li>
          <li><h4>Attendance of 4 sessions</h4></li>
        </ul>
      </div>
</div>


      
  </div>

  </div>
  <div id="scrollHere">
        <h1 style="text-align: center; margin: 100px;">Ready to roll the dice?</h1>
  </div>
  <hr>

  <div id="paymentBox" class="hidden">
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
          <div style="border: 1px solid black; border-radius: 5px;" class="p-2 mb-2 mx-auto">
            <input type="text" placeholder="Card Holder Name" style="border: none; width: 100%;" required id="cardHolderName" v-model="cardHolderName">
          </div>
        </div>


        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div style="border: 1px solid black; border-radius: 5px;" class="p-2 mb-2">
              <input type="text" maxlength="19"
                placeholder="Card Number" style="border: none; width: 100%;" required id="cardNumber" v-model="cardNumber">
            </div>
          </div>

          <div class="col-lg-2 col-md-3 col-sm-6">
            <div style="border: 1px solid black; border-radius: 5px; width: 100%;" class="p-2 mb-2">
              <input type="text" placeholder="MM/YY"
                style="border: none; width: 100%" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" required
                id="expDate" maxlength="5" expDate="expDate" v-model="expDate">
            </div>
          </div>

          <div class="col-lg-2 col-md-3 col-sm-6">
            <div style="border: 1px solid black; border-radius: 5px;" class="p-2 mb-2">
              <input type="text" placeholder="CVC"
                style="border: none; width: 100%;" required id="CVC" v-model="CVC"> 
            </div>
          </div>
        </div>

          <!-- Error Message: Your card number is incomplete. -->
          <div id="error-message" class="alert alert-danger" style="display: none; width: 75%;"></div>
  
          <div style="margin: 5px; margin-top: 50px; text-align: center; font-size: 30px;">
              Total: {{ totalAmount }}
          </div>
          <div class="text-center"> <!-- Add text-center class here -->
              <button class="btn btn-lg mx-auto" id="checkout-button" style="width: 75%; background-color: #070F5F; color: white;">
                  Pay
              </button>
          </div>
      </form>
  </div>

  </div>


</template>

<script>
import Stripe from 'stripe'
import Global from '../global'
// import $ from 'jquery';
const api_key = 'sk_test_51NyYaTGYkOKxngERwkOrjmZuFSaREnZRRxfZnI6KfuHWYuvFmw82UeU4P3wPfJhi7SIB7h9tpr8i0UYhlZVAmSFJ00BLexoChF';
const stripe = Stripe(api_key);

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
          memberStatus: Global.memberStatus,
          loginStatus: Global.loginInfo,

      }
  },
  created(){
    console.log(this.memberStatus)
    console.log(this.loginStatus)
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
  }
}

// $(document).ready(function() {
//   // Reference to the scroll trigger element
//   var scrollHere = $("#scrollHere");
//   // Reference to the hidden element to appear
//   var paymentBox = $("#paymentBox");

//   // Function to handle the scroll event
//   function handleScroll() {
//     // Calculate the position of the scroll trigger element
//     var triggerPosition = scrollHere.offset().top;
//     // Calculate the current scroll position
//     var scrollTop = $(window).scrollTop();

//     // Check if the scroll position is past the trigger element
//     if (scrollTop > triggerPosition-380) {
//       paymentBox.fadeIn(200);
//     } else {
//       paymentBox.fadeOut(200);
//     }
//   }

//   // Add a scroll event listener
//   $(window).scroll(handleScroll);

//   // Initial check on page load (in case the trigger point is already passed)
//   handleScroll();
// });




</script>

<style scoped>
.rowInfo{
  margin: 100px;
}

#paymentBox{
  border: 1px solid #070F5F;
  border-radius: 5px;
  width: 70%;
  margin: auto;
  padding: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2) ;
  color: #070F5F;
  background-color: white;
  display: none;
}

.marginTop {
  height: 80px;
}

.lineUp {
  animation: 2s anim-lineUp ease-out;
  text-align: center;
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
    font-size: 200%;
    font-weight: bold;
}

.memberMsg{
  text-align: left;

}

li{
  text-align: left;
}
.center-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>