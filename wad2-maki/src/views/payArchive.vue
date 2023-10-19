<template>

    <div>
        <h1>Pay for Membership</h1>
        <div>
                <h4>You are paying $5 for One Year Strategica Membership</h4>
        </div>
    </div>
    <div class="container">
        <form id="payment-form">

            <div style="border: 1px solid black; border-radius: 5px; width: 75%;" class="p-2 mb-2 mx-auto">
                <input type="text" placeholder="Card Holder Name" style="border: none;" required id="cardHolderName">
            </div>
  
            
            <!-- <div id="card-element" style="border: 1px solid black; border-radius: 5px; padding: 10px; width: 75%;"></div> -->
            <div style="border: 1px solid black; border-radius: 5px; width: 75%;" class="p-2 mb-2 mx-auto">
                <i class="fas fa-credit-card"></i> <input type="text" maxlength="19"
                    placeholder="Card Number" style="border: none; width: 60%;" required id="cardNumber">

                <i class="fas fa-calendar-alt"></i> <input type="text" placeholder="MM/YY"
                    style="border: none; width: 15%;" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" required
                    id="expDate" maxlength="5" expDate="expDate">

                <i class="fas fa-key"></i><input type="text" placeholder="CVC"
                    style="border: none; width: 15%;" required maxlength="3" id="CVC">
            </div>

            <!-- Error Message: Your card number is incomplete. -->
            <div id="error-message" class="alert alert-danger" style="display: none; width: 75%;"></div>
    
            <div style="margin: 5px;">
                Total: $5
            </div>
            <button class="btn btn-success btn-lg" id="checkout-button" style="width: 75%;" @click="submitPayment()">
                Checkout
            </button>
        </form>
    </div>

</template>

<script>
// import axios from 'axios';
import { Stripe } from 'stripe'


const api_key = 'sk_test_51NyYaTGYkOKxngERwkOrjmZuFSaREnZRRxfZnI6KfuHWYuvFmw82UeU4P3wPfJhi7SIB7h9tpr8i0UYhlZVAmSFJ00BLexoChF';

const stripe = Stripe(api_key);
// const stripeApiUrl = 'https://api.stripe.com/v1/balance';

// var url = "https://api.stripe.com/v1/invoices/:id/pay"

export default{
    data(){
        return{
            cardNumber: "",
            expDate: "",
            CVC: "",
            cardHolderName: "",
            paymentIntentData: "",
            clientSecret: "",
        }
    },
    methods: {
    async createPaymentIntent() {
      try {
        const cardDetails = {
          number: this.cardNumber, // Get card number from your form
          exp_month: this.expDate.split("/")[0], // Extract month from your form
          exp_year: this.expDate.split("/")[1], // Extract year from your form
          cvc: this.CVC, // Get CVC from your form
        };

        const response = await stripe.paymentIntents.create({
          amount: 500, // Amount in cents
          currency: 'sgd',
          payment_method_data: {
            type: 'card',
            card: cardDetails,
          },
        });

        console.log('Payment Intent created:', response);
        this.clientSecret = response.id;

        // Now you can call a separate method to confirm the payment if needed
        this.confirmPayment(response.client_secret);
      } catch (error) {
        console.error('Error creating Payment Intent:', error);
        throw error;
      }
    },
    async confirmPayment(clientSecret) {
      // Use the clientSecret to confirm the payment
      try {
        const result = await stripe.confirmCardPayment(clientSecret);
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
        this.createPaymentIntent();
    },
    // methods: {
    //     async createPaymentIntent() {
    //     try {
    //         const response = await stripe.paymentIntents.create({
    //         amount: 500, // Amount in cents
    //         currency: 'sgd',
    //         });

    //         console.log('Payment Intent created:', response);
    //         this.paymentIntentData = response;
    //         this.clientSecret = response.id;
    //     } catch (error) {
    //         console.error('Error creating Payment Intent:', error);
    //         throw error;
    //     }
    //     },
    //     confirmPayment(clientSecret, cardElement) {
    //     // Call stripe.confirmCardPayment with clientSecret and cardElement
    //     stripe.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //         card: cardElement,
    //         },
    //     }).then(function (result) {
    //         if (result.error) {
    //         // Handle payment error
    //         console.error('Payment confirmation error:', result.error);
    //         } else {
    //         // Payment is successful
    //         console.log('Payment confirmed successfully:', result);
    //         }
    //     });
    //     },
    //     getData(){
    //         const cardNumberInput = document.getElementById("cardNumber").value;
    //         const expDateInput = document.getElementById("expDate").value;
    //         const [exp_month, exp_year] = expDateInput.split("/");
    //         const CVCInput = document.getElementById("CVC").value;

    //         const card_details = {
    //             number: cardNumberInput,
    //             exp_month: exp_month,
    //             exp_year: exp_year,
    //             cvc: CVCInput,
    //         };
    //         console.log(card_details)
            // console.log("sessionStorage (START)");
            // console.log(sessionStorage);
            // console.log("sessionStorage (END)");
            // var userId = sessionStorage.getItem("userId");
            // console.log("WHEN CLICK CHECKOUT -- START");
            // console.log(userId);

            // Card Holder Name
        //     const cardHolderName = document.getElementById("cardHolderName").value;
        //     const combinedData = {
        //         // userId: userId,
        //         // dataObj: jsonData,
        //         cardDetails: card_details,
        //         cardName: cardHolderName,
        //     };
        //     console.log(combinedData)

        // },
        // createPaymentIntent(){
        //     const paymentData = {
        //     amount: 2000,
        //     currency: 'usd',
        //     automatic_payment_methods: {
        //         enabled: true
        //     }};
        //     axios.post("https://api.stripe.com/v1/payment_intents", paymentData, {
        //         headers: {
        //             Authorization: `Bearer ${api_key}`,
        //         },
        //     })
        //     .then((response) => {
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        // },
        },
    //     mounted() {
    //     // This method is called when the component is mounted (page load).
    //     this.createPaymentIntent();
    // },
    
};


// const checkStripeConnection = async () => {
//   try {
//     const response = await axios.get(stripeApiUrl, {
//       headers: {
//         Authorization: `Bearer ${api_key}`,
//       },
//     });
//     console.log('Stripe connection status:', response.status);
//   } catch (error) {
//     console.error('Error checking Stripe connection:', error.message);
//   }
// };

// const createPaymentIntent =  async () => {
//       try {
//         const response = await stripe.paymentIntents.create({
//           amount: 500, // Amount in cents
//           currency: 'sgd',
//         });

//         console.log('Payment Intent created:', response);
//         paymentIntentData = response;
//       } catch (error) {
//         console.error('Error creating Payment Intent:', error);
//       }
// };

// checkStripeConnection();

// createPaymentIntent();
// import { Stripe } from 'stripe'
// const api_key = 'sk_test_51NyYaTGYkOKxngERwkOrjmZuFSaREnZRRxfZnI6KfuHWYuvFmw82UeU4P3wPfJhi7SIB7h9tpr8i0UYhlZVAmSFJ00BLexoChF';
// const stripe = Stripe(api_key);

// export default{
//     data(){
//         return{
//             cardNumber: "",
//             expDate: "",
//             CVC: "",
//             cardHolderName: "",
//             paymentIntentData: "",
//             clientSecret: "",
//         }
//     },
//     methods: {
//     async createPaymentIntent() {
//       try {
//         const cardDetails = {
//           number: this.cardNumber, // Get card number from your form
//           exp_month: this.expDate.split("/")[0], // Extract month from your form
//           exp_year: this.expDate.split("/")[1], // Extract year from your form
//           cvc: this.CVC, // Get CVC from your form
//         };

//         const response = await stripe.paymentIntents.create({
//           amount: 500, // Amount in cents
//           currency: 'sgd',
//           payment_method_data: {
//             type: 'card',
//             card: cardDetails,
//           },
//         });

//         console.log('Payment Intent created:', response);
//         this.clientSecret = response.id;

//         // Now you can call a separate method to confirm the payment if needed
//         this.confirmPayment(response.client_secret);
//       } catch (error) {
//         console.error('Error creating Payment Intent:', error);
//         throw error;
//       }
//     },
//     async confirmPayment(clientSecret) {
//       // Use the clientSecret to confirm the payment
//       try {
//         const result = await stripe.confirmCardPayment(clientSecret);
//         if (result.error) {
//           // Handle payment error
//           console.error('Payment confirmation error:', result.error);
//         } else {
//           // Payment is successful
//           console.log('Payment confirmed successfully:', result);
//           // i want to route to paymment success page
//           // Assuming you have a route named "payment-success"
//             this.$router.push({ name: 'payment-success' });


//         }
//       } catch (error) {
//         console.error('Error confirming Payment:', error);
//       }
//     },
//     submitPayment(){
//         console.log("here")
//         this.createPaymentIntent();
//     },
//     },
// }


</script>

<style scoped>


</style>

<template>

    <div>
        <h1>Pay for Membership</h1>
        <div>
                <h4>You are paying $5 for One Year Strategica Membership</h4>
        </div>
    </div>
    <div class="container">
        <form id="payment-form" @submit.prevent="createPaymentIntent">

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
            <button class="btn btn-success btn-lg" id="checkout-button" style="width: 75%;" @click="createPaymentIntent">
                Checkout
            </button>
        </form>
    </div>

</template>

<script>
// import axios from 'axios';
import { Stripe } from 'stripe'
import { loadStripe } from '@stripe/stripe-js';

const api_key = 'sk_test_51NyYaTGYkOKxngERwkOrjmZuFSaREnZRRxfZnI6KfuHWYuvFmw82UeU4P3wPfJhi7SIB7h9tpr8i0UYhlZVAmSFJ00BLexoChF';

const stripe = Stripe(api_key);
// const stripeApiUrl = 'https://api.stripe.com/v1/balance';

// var url = "https://api.stripe.com/v1/invoices/:id/pay"

export default{
    data(){
        return{
            cardNumber: "",
            expDate: "",
            CVC: "",
            cardHolderName: "",
            paymentIntentData: "",
            clientSecret: "",
            token_response: "",
            stripe: null,
        }
    },
    methods: {
    async createPaymentIntent() {
      try {
        // const cardDetails = {
        //   number: this.cardNumber, // Get card number from your form
        //   exp_month: this.expDate.split("/")[0], // Extract month from your form
        //   exp_year: this.expDate.split("/")[1], // Extract year from your form
        //   cvc: this.CVC, // Get CVC from your form
        // };

        // const token_response = await stripe.Token.create({
        //   card: cardDetails,
        // });

        // if (token_response.error) {
        // console.error('Error creating token:', token_response.error);
        // // Handle the error, e.g., display an error message to the user
        // } else {
        // const response = await stripe.paymentIntents.create({
        //     amount: 500, // Amount in cents
        //     currency: 'sgd',
        //     payment_method_data: {
        //     type: 'card',
        //     card: token_response.token.id,
        //     },
        // });
        const response = await stripe.paymentIntents.create({
            amount: 500, // Amount in cents
            currency: 'sgd',
            payment_method_data: "pm_card_visa",
        }
        )

        console.log('Payment Intent created:', response);
        this.clientSecret = response.id;

        // Now you can call a separate method to confirm the payment if needed
        // this.confirmPayment(response.client_secret);
        }
       catch (error) {
        console.error('Error creating Payment Intent:', error);
        throw error;
      }
    },
    // async confirmPayment(clientSecret) {
    //   // Use the clientSecret to confirm the payment
    //   try {
    //     const result = await stripe.confirmCardPayment(clientSecret);
    //     if (result.error) {
    //       // Handle payment error
    //       console.error('Payment confirmation error:', result.error);
    //     } else {
    //       // Payment is successful
    //       console.log('Payment confirmed successfully:', result);
    //     }
    //   } catch (error) {
    //     console.error('Error confirming Payment:', error);
    //   }
    // },
    // submitPayment(){
    //     this.createPaymentIntent();
    // },

},
    
};


</script>