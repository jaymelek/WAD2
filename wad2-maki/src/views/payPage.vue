<template>

    <div>
        <h1>Pay for Membership</h1>
        <div>
                <h4>You are paying $5 for One Year Strategica Membership</h4>
        </div>
    </div>
    <div class="container">
        <form id="payment-form" @submit.prevent="submitPayment">

            <div style="border: 1px solid black; border-radius: 5px; width: 75%;" class="p-2 mb-2 mx-auto">
                <input type="text" placeholder="Card Holder Name" style="border: none;" required id="cardHolderName" v-model="cardHolderName">
            </div>
  
            
            <!-- <div id="card-element" style="border: 1px solid black; border-radius: 5px; padding: 10px; width: 75%;"></div> -->
            <div style="border: 1px solid black; border-radius: 5px; width: 75%;" class="p-2 mb-2 mx-auto">
                <i class="fas fa-credit-card"></i> <input type="text" maxlength="19"
                    placeholder="Card Number" style="border: none; width: 60%;" required id="cardNumber" v-model="cardNumber">

                <i class="fas fa-calendar-alt"></i> <input type="text" placeholder="MM/YY"
                    style="border: none; width: 15%;" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" required
                    id="expDate" maxlength="5" expDate="expDate" v-model="expDate">

                <i class="fas fa-key"></i><input type="text" placeholder="CVC"
                    style="border: none; width: 15%;" required maxlength="3" id="CVC" v-model="CVC"> 
            </div>

            <!-- Error Message: Your card number is incomplete. -->
            <div id="error-message" class="alert alert-danger" style="display: none; width: 75%;"></div>
    
            <div style="margin: 5px;">
                Total: $5
            </div>
            <button class="btn btn-success btn-lg" id="checkout-button" style="width: 75%;" @click="submitPayment">
                Checkout
            </button>
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
            return_url: "http://localhost:8080/paymentSuccess"
        }
    },
    // created() {
    // this.stripe = new Stripe('pk_test_51NyYaTGYkOKxngERoX3Zt6vDiHlBEtPmyxFtCLbWsb9fKJ6No7ZwuzxCIjD6OVNtpRqUdUWxnAOroywhZUoGSLPx00uOwww8m9');
    // },
    methods: {
    async createPaymentIntent() {
      try {
        // const cardDetails = {
        //   number: this.cardNumber, // Get card number from your form
        //   exp_month: this.expDate.split("/")[0], // Extract month from your form
        //   exp_year: this.expDate.split("/")[1], // Extract year from your form
        //   cvc: this.CVC, // Get CVC from your form
        // };

        const response = await stripe.paymentIntents.create({
          amount: 500, // Amount in cents
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
            return_url: "http://localhost:8080/paymentSuccess",},
        );
        if (result.error) {
          // Handle payment error
          console.error('Payment confirmation error:', result.error);
        } else {
          // Payment is successful
          console.log('Payment confirmed successfully:', result);


        }
      } catch (error) {
        console.error('Error confirming Payment:', error);
      }
    },
    submitPayment(){
        console.log("here")
        this.createPaymentIntent();
    },
    },
}

</script>