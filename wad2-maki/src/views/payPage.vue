<template>

  <div>
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
              <button class="btn btn-success btn-lg mx-auto" id="checkout-button" style="width: 75%;">
                  Pay
              </button>
          </div>
      </form>
  </div>

</template>

<script>
import Stripe from 'stripe'
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
      }
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

</script>

<style scoped>


</style>