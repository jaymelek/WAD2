<!-- Beat -->

<!-- Template -->
<template>
    <div class="marginTop"></div>
    
    
    <!-- Start of Content -->
    <div class="container-fluid colWidth">
        <div class="row align-items-center justify-content-center m-2"> 
            <div class="col-7 col-md-5 px-0 pb-4">
                
                <div id="gameCarousel" class="carousel slide w-100 carouselBox">
                    <div class="carousel-inner rounded">
                        <div class="carousel-item active">
                            <img :src="listing.img" class="d-block w-100" >
                        </div>
                        <div class="carousel-item">
                            <img :src="listing.img" class="d-block w-100" >
                        </div>
                        <div class="carousel-item">
                            <img :src="listing.img" class="d-block w-100" >
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#gameCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#gameCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="container my-5">
        <div v-if="loginStatus == false" class="alert alert-danger" role="alert"> Please login before borrowing a game! </div>
        </div>

        <div class="row">
            <div class="container">
                <form class="row g-3 justify-content-start align-items-center" id="borrowGameForm">
                        <!-- Name -->
                        <div class="col-sm-6">
                            <label for="name1" class="form-label">Matriculated Name:</label>
                            <input type="text" class="form-control inputstl" id="name1" placeholder="Enter Your Full Name" v-model="personName" required>
                        </div>
                        
                        <!-- Telegram Handle -->
                        <div class="col-sm-6">
                            <label for="telegram" class="form-label">Telegram Handle:</label>
                            <input type="text" class="form-control inputstl" id="telegram" name="telegram" v-model="telegram" placeholder="@Username" required>
                        </div>
                
                        <!-- Borrowing on behalf of themselves or a club -->
                        <div class="col-sm-6">
                            <label class="form-label">Borrowing On Behalf Of</label>
                            <div class="form-check px-0 pb-1">
                                <input class="btn-check inputstl" type="radio" name="borrowingType" id="self" value="Self" v-model="borrowingBehalf" checked required>
                                <label class="btn btn-outline-light w-100 btn-sm" for="self">Myself</label>
                            </div>
                            <div class="form-check px-0">
                                <input class="btn-check inputstl" type="radio" name="borrowingType" id="club" value="Club" v-model="borrowingBehalf" required>
                                <label class="btn btn-outline-light w-100 btn-sm" for="club">My Club</label>
                            </div>
                        </div>
                
                        <!-- Email Address -->
                        <div class="col-sm-6">
                            <label for="email1" class="form-label">SMU Email (with Faculty):</label>
                            <input type="email" class="form-control inputstl" id="email1" v-model="email" placeholder="john.2021@scis.smu.edu.sg">
                        </div>

                        <!-- Warning if Availability is not "Available" -->
                        <div class="col-12" v-if="this.listing.availability != 'Available'">
                            <div class="alert alert-warning" role="alert">
                                <h4 class="alert-heading">Note:</h4>
                                <p> {{this.listing.name}} is {{ this.listing.availability }} </p>
                                <hr>
                                <p class="mb-0">If you select dates that clash with any confirmed bookings, your loan application will be rejected.</p>
                            </div>
                        </div>
                
                        <!-- Loan Start Date -->
                        <div class="col-sm-6">
                            <label for="startDate" class="form-label">Loan Start Date:</label>
                            <input type="date" class="form-control inputstl" id="startDate" name="startDate" required
                                v-bind:min="minDate()" v-model="loanStartDate"> <!--v-bind:max="maxDate"-->
                        </div>
                
                        <!-- Loan Return Date -->
                        <div class="col-sm-6">
                            <label for="returnDate" class="form-label">Loan Return Date:</label>
                            <input type="date" class="form-control inputstl" id="returnDate" name="returnDate" required
                                v-bind:min="loanStartDate" v-bind:max="loanEndDate" v-model="selectedEndDate"> 
                        </div> 
                        
                        <!-- FOR CLUBS ======================================================== -->

                            <!-- Club Name -->
                            <div class="col-sm-6" v-if="borrowingBehalf == 'Club'">
                                <label for="clubName" class="form-label">SMU Club Name:</label>
                                <input type="text" class="form-control inputstl" id="clubName" name="clubName" v-model="clubName" placeholder="Enter Club Name" required>
                            </div>
                
                            <!-- Club Email Address -->
                            <div class="col-sm-6" v-if="borrowingBehalf == 'Club'">
                                <label for="clubEmail" class="form-label">Club Email:</label>
                                <input type="email" class="form-control inputstl" id="clubEmail" name="clubEmail" v-model="clubEmail" placeholder="Enter Club Email" required>
                            </div>

                            <!-- Club Contact Designation -->
                            <div class="col-sm-6" v-if="borrowingBehalf == 'Club'">
                                <label for="clubContactDesignation" class="form-label">Club Contact Designation:</label>
                                <input type="text" class="form-control inputstl" id="clubContactDesignation" name="clubContactDesignation" v-model="clubContact" placeholder="e.g., President, Hon Fin, etc." required>
                            </div>

                            <!-- Event/Purpose for Borrowing -->
                            <div class="col-sm-6" v-if="borrowingBehalf == 'Club'">
                                <label for="borrowPurpose" class="form-label">Purpose for Borrowing:</label>
                                <input type="text" class="form-control inputstl" id="borrowPurpose" name="borrowPurpose" v-model="purpose" placeholder="Name of Event, Casual etc" required>
                            </div>

                            <!-- Location of Event -->
                            <div class="col-sm-6" v-if="borrowingBehalf == 'Club'">
                                <label for="eventLocation" class="form-label">Location of Event:</label>
                                <input type="text" class="form-control inputstl" id="eventLocation" name="eventLocation" v-model="location" placeholder="SCIS CR B1-1" required>
                            </div>

                            <!-- Who will be Playing -->
                            <div class="col-sm-6" v-if="borrowingBehalf == 'Club'">
                                <label for="personsPlaying" class="form-label">Who will be playing the games?</label>
                                <input type="text" class="form-control inputstl" id="personsPlaying" name="personsPlaying" v-model="whoPlay" placeholder="Members, Exchange Students..." required>
                            </div>

                            <!-- Event Date -->
                            <div class="col-sm-6" v-if="borrowingBehalf == 'Club'">
                                <label for="eventDate" class="form-label">When is the event?</label>
                                <input type="date" class="form-control inputstl" id="eventDate" name="eventDate" :min="loanStartDate" :max="selectedEndDate" required>
                            </div>

                        <!-- END OF FOR CLUBS =================================================== -->

                        <div v-else>
                        </div>

                        <!-- PDPA Clause -->
                        <div class="col-12">
                            By submitting this form, the borrower shall be responsible for the proper use and deployment of the board games. This includes supervising the games to ensure proper handling by the players.
                            In the event where the loaned board games are damaged, lost, confiscated, or stolen from the time the borrower assumes custody to the time it is returned to Strategica, 
                            the borrower also agrees to be responsible for the full cost of repair or replacement of any or all of the components of the affected board games. 
                            If the board games are lost, stolen or damaged, the borrower agrees to promptly notify the Lender representative designated above. In the event of dispute, Strategica has the final say.
                            <br><br>
                            I agree to the clause above, and to ensure the proper use and handling of the loaned board games.
                            <div width="auto" class="align-items-center form-check-reverse">
                                <input type="checkbox" class="inputstl form-check-input" id="pdpaClause" name="pdpaClause" required>
                                <label for="pdpaClause" class="form-check-label"> &nbsp; Yes</label>
                            </div>
                            
                        </div>
                
                        <!-- Confirm Button -->
                        <button type="submit" class="btn btn-outline-light w-100"
                        @click="postApplication()" :disabled="loginStatus == false"
                        >Confirm</button> 
                </form>
            </div>
        </div>
        
    </div>

</template>


<!-- Script -->
<script>
// Connection to Firebase
// import { ref, onMounted } from 'vue'; // Import Vue composition API functions
// import { app } from "../firebase/firebase";
// import { getDatabase, ref as dbRef, get } from 'firebase/database';
import axios from 'axios';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Global from '../global';

const firebaseDatabaseURL = 'https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app/';
const gamePath = '/games.json'; 
const borrowApplicationsPath = '/borrowApplications.json';



export default {
    data(){
        return{
        listing: {},
        gameID: this.$route.params.gameID,
        // currentDate: new Date().toISOString().split('T')[0],
        loanStartDate: this.minDate(),
        selectedEndDate: this.minDate(),
        borrowingBehalf:"Self",
        personName:"",
        telegram:"",
        email:"",
        clubName:"",
        clubEmail:"",
        clubContact:"",
        purpose:"",
        location:"",
        whoPlay:"",
        loginStatus: Global.loginInfo,
        membershipStatus: Global.memberStatus,

        }; 
    },

    created() {
        console.log(this.membershipStatus)
        console.log(this.loginStatus)
        this.getGameData();
    },

    computed: {

        loanEndDate() {
            // Get the loan start date
            // convert loanStartDate to Date object
            var startDate = new Date(this.loanStartDate);
            
            // const startDate = this.loanStartDate
            var loanEndDate = new Date(startDate);
            
            loanEndDate.setDate(startDate.getDate() + 14);
            
            loanEndDate = loanEndDate.toISOString().split('T')[0];
            // this.loanEndDate = loanEndDate;
            console.log(loanEndDate)
            return loanEndDate;
        }

    },

    methods: {
        minDate() {
            // Get the current date
            const currentDate = new Date();

            // Calculate the date 2 weeks (14 days) in the future
            const minDate = new Date(currentDate);
            
            minDate.setDate(currentDate.getDate() + 7);
            
            // Format the date as YYYY-MM-DD (required format for the 'max' attribute)
            const formattedMinDate = minDate.toISOString().split('T')[0];
            
            return formattedMinDate;
        },

        getGameData() {
            axios
            .get(firebaseDatabaseURL + gamePath)
            .then((response) => {
            if (typeof response.data === 'object') {
                this.listing = response.data[this.gameID];

                // Initialize Firebase Storage
                const storage = getStorage();

                
                if (Object.prototype.hasOwnProperty.call(this.listing, "img")) {
                    const listing = this.listing;
                    console.log(listing.img)

                    // Check if the listing has an 'img' property
                    if (listing.img) {
                    const imageRef = storageRef(storage, listing.img);
                    getDownloadURL(imageRef)
                        .then((url) => {
                        // Update the 'img' property of the listing with the new URL
                        this.listing.img = url;
                        })
                        .catch((error) => {
                        console.error('Error getting download URL for image:', error);
                        });
                    }
                }
                
            } else {
                console.error('Response data is not an object:', response.data);
            }
            })
            .catch((error) => {
            console.error('Error fetching data:', error);
            });
        },
        postApplication() {
        // Check if all required fields are filled
        if (this.personName == '' || this.email == '' || this.telegram == '' || this.borrowingBehalf == '' || this.loanStartDate == '' || this.selectedEndDate == ''){
            alert('Please fill in All Personal Details.');
            this.$router.push({ name: 'borrowPage' });
        }else if (this.borrowingBehalf == 'Club' && (this.clubName == '' || this.clubEmail == '' || this.clubContact == '' || this.purpose == '' || this.location == '' || this.whoPlay == '')){
            alert('Please fill in all Club Details.');
            this.$router.push({ name: 'borrowPage' });
        }else if (this.borrowingBehalf == 'Club' && (this.clubName != '' || this.clubEmail != '' || this.clubContact != '' || this.purpose != '' || this.location != '' || this.whoPlay != '')){
            const data = {
                gameID: this.gameID,
                gameName: this.listing.name,
                borrowerName: this.personName,
                borrowerEmail: this.email,
                borrowerTelegram: this.telegram,
                borrowingBehalf: this.borrowingBehalf,
                loanStartDate: this.loanStartDate,
                loanEndDate: this.selectedEndDate,
                status: "Pending",
                borrowerClubName: this.clubName,
                borrowerClubEmail: this.clubEmail,
                borrowerClubContact: this.clubContact,
                borrowerPurpose: this.purpose,
                borrowerLocation: this.location,
                borrowerWhoPlay: this.whoPlay,
                };
                // Now you can proceed with submitting the data
                axios
                .post(firebaseDatabaseURL + borrowApplicationsPath, data)
                .then((response) => {
                console.log(response);
                alert("Your application has been submitted successfully!")
                this.$router.push({ name: 'borrowPage' });
                })
                .catch((error) => {
                console.error('Error posting data:', error);
                });
        }else {
            const data = {
                gameID: this.gameID,
                gameName: this.listing.name,
                borrowerName: this.personName,
                borrowerEmail: this.email,
                borrowerTelegram: this.telegram,
                borrowingBehalf: this.borrowingBehalf,
                loanStartDate: this.loanStartDate,
                loanEndDate: this.selectedEndDate,
                status: "Pending",
                };
                // Now you can proceed with submitting the data
                axios
                .post(firebaseDatabaseURL + borrowApplicationsPath, data)
                .then((response) => {
                console.log(response);
                alert("Your application has been submitted successfully!")
                this.$router.push({ name: 'borrowPage' });
                })
                .catch((error) => {
                console.error('Error posting data:', error);
                });
        }
        },

        pretty_date(ugly_date) {
            var pretty_date = new Date(ugly_date);
            return pretty_date.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        },

    },

    mounted() {
    // Initialize the carousel when the component is mounted
    $('#gameCarousel');
  },
};
  
</script>


<!-- Style -->
<style>
    .bolded {
        font-weight: bold;
    }

    .subtext {
        font-size: 0.8rem;
    }

    .star {
        width: 20%;
        max-width: 25px;
        height: auto;
    }

    .colWidth {
        width: 100%;
        max-width: 800px;
    }

    .inputstl {
        border: none;
        /* border-bottom: 2px solid white; */
    }

    .marginTop {
    height: 80px;
    }

    .btn-outline-light {
    --bs-btn-hover-color: #7ba7bb;
    --bs-btn-active-color: var(--bs-btn-hover-color);
    }

    .carouselBox {
        background-color: rgba(255, 255, 255, 0.1);
    }

    
    /* Form Styling  ========================================================== */
    .form-control {
        border:none;
        border-bottom: 2px solid white;
        /* background-color: rgb(255, 255, 255, 0.2);   */
        background-color: transparent;
        border-radius: 0px;
        color: white;
    }

    .form-control:focus {
        border-color: #070F5F;
        box-shadow: none;
        background-color: transparent;
        color: white;
    }

    .form-control::placeholder {
        color: white;
        opacity: 0.5;
    }

    /* Autocomplete Styling for Chrome */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
    border: none;
    border-bottom: 2px solid white;
    -webkit-text-fill-color: white;
    -webkit-box-shadow: white;
    transition: background-color 5000s ease-in-out 0s;
    }

    #startDate, #returnDate, #eventDate {
        color: white;
    }

    #pdpaClause:checked{
        background-color: #070F5F;

    }

    #startDate::-webkit-calendar-picker-indicator,
    #returnDate::-webkit-calendar-picker-indicator,
    #eventDate::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
</style>

