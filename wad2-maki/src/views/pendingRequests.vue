<!-- Beat -->

<!-- Template -->
<template>
    <div class="marginTop"></div>
    
    <!-- Start of Content -->
    <div class="container-fluid colWidth">
        <div class="row align-items-center justify-content-center"> 

            <!-- Pending Requests -->
            <div class="colWidth">
                <h1 class="text-start"><span class="highlighted">Pending Requests</span></h1>
                <div class="container-fluid w-100 p-0">
                    <div class="row rounded reviewBox w-100 py-2 mx-0 my-2 align-items-center justify-content-center"
                    v-for="application in applications" :key="application.applicationID"
                    >
                        <div class="row rounded reviewBox w-100 py-2 mx-0 mt-2 mb-0 align-items-center justify-content-between">
                            <div class="col-auto">
                                <h4 class="mb-0" @click="gotoEvent(application.gameID)">{{ application.gameName }}</h4>
                            </div>

                            <div class="col-auto">
                                <!-- Each application is a form  -->
                                <form class="row g-3 justify-content-end align-items-center" id="approveRequest">
                                    <input type="hidden" :value="application.applicationID">
                                    <button type="button" class="btn btn-success w-auto"
                                    @click="updateApplication(application.applicationID, 'approve')"
                                    >Approve</button>
                                    <button type="button" class="btn btn-danger w-auto mx-1"
                                    @click="updateApplication(application.applicationID, 'reject')"
                                    >Reject</button>
                                </form>
                            </div>
                        </div>
                    
                        <div class="row rounded reviewBox w-100 py-2 mx-0 mt-0 mb-2 justify-content-center">
                            <div class="col-6">
                                <p class="my-0">Borrower: {{ application.borrowerName }}</p>
                                <p class="my-0">Start Date: {{ pretty_date(application.loanStartDate) }}</p>
                                <p class="my-0">End Date: {{ pretty_date(application.loanEndDate) }}</p>
                            </div>
                            
                            <div class="col-6">
                                <p class="my-0">Borrowing Type: For {{ application.borrowingType }}</p>
                                <p class="my-0">Borrower's Email: {{ application.borrowerEmail }}</p>
                                <p class="my-0">Borrower's Telegram: {{ application.borrowerTelegram }}</p>
                            </div>
                        </div>
                        
                        <!-- if club borrowing -->
                        <div class="row rounded reviewBox w-100 py-2 mx-0 mt-0 mb-2 justify-content-center"
                        v-if="application.borrowingBehalf == 'Club'"
                        >
                            <hr>
                            <div class="col-6">
                                <p class="my-0">Club Contact: {{ application.borrowerClubContact }}</p>
                                <p class="my-0">Location: {{ application.borrowerLocation }}</p>
                                <p class="my-0">Purpose: {{ application.borrowerPurpose }}</p>
                            </div>
                            
                            <div class="col-6">
                                <p class="my-0">Type of Players: For {{ application.borrowerWhoPlay }}</p>
                                <p class="my-0">Club Email: {{ application.borrowerClubEmail }}</p>
                            </div>
                        </div>
                    </div> 
                    <!--End of v-for loop-->


                </div>
            </div>
            
        </div>


        <!-- Reviewed Requests ==================================================================================== --> 
        <div class="row justify-content-center mt-3">
            <div class="col colWidth">
                <h1 class="text-start"><span class="highlighted">Reviewed Requests</span></h1>
                
                <div class="container-fluid w-100 p-0">

                    <div class="row rounded reviewBox w-100 py-2 mx-0 my-2 align-items-center justify-content-center"
                        v-for="application in reviewedApplications" :key="application.applicationID"
                        >
                            <div class="row rounded reviewBox w-100 py-2 mx-0 mt-2 mb-0 align-items-center justify-content-between">
                                <div class="col-auto">
                                    <h4 class="mb-0" @click="gotoEvent(application.gameID)">{{ application.gameName }}</h4>
                                </div>

                                <div class="col-auto">
                                    <!-- Each application is a form  -->
                                    <div class="bg-success statusBar px-3 ms-auto"
                                    v-if="application.status == 'Approved'"
                                    >
                                        {{ application.status }}
                                    </div>
                                    <div class="bg-danger statusBar px-3 ms-auto"
                                    v-if="application.status == 'Rejected'"
                                    >
                                        {{ application.status }}
                                    </div>
                                </div>
                            </div>
                        
                            <div class="row rounded reviewBox w-100 py-2 mx-0 mt-0 mb-2 justify-content-center">
                                <div class="col-6">
                                    <p class="my-0">Borrower: {{ application.borrowerName }}</p>
                                    <p class="my-0">Start Date: {{ pretty_date(application.loanStartDate) }}</p>
                                    <p class="my-0">End Date: {{ pretty_date(application.loanEndDate) }}</p>
                                </div>
                                
                                <div class="col-6">
                                    <p class="my-0">Borrowing Type: For {{ application.borrowingType }}</p>
                                    <p class="my-0">Borrower's Email: {{ application.borrowerEmail }}</p>
                                    <p class="my-0">Borrower's Telegram: {{ application.borrowerTelegram }}</p>
                                </div>
                            </div>
                            
                            <!-- if club borrowing -->
                            <div class="row rounded reviewBox w-100 py-2 mx-0 mt-0 mb-2 justify-content-center"
                            v-if="application.borrowingBehalf == 'Club'"
                            >
                                <hr>
                                <div class="col-6">
                                    <p class="my-0">Club Contact: {{ application.borrowerClubContact }}</p>
                                    <p class="my-0">Location: {{ application.borrowerLocation }}</p>
                                    <p class="my-0">Purpose: {{ application.borrowerPurpose }}</p>
                                </div>
                                
                                <div class="col-6">
                                    <p class="my-0">Type of Players: For {{ application.borrowerWhoPlay }}</p>
                                    <p class="my-0">Club Email: {{ application.borrowerClubEmail }}</p>
                                </div>
                            </div>
                        </div> 
                        <!--End of v-for loop-->

                </div>
            </div>
        </div>
        
    </div>
</template>


<!-- Script -->
<script>
// Connection to Firebase
import { ref, onMounted } from 'vue'; // Import Vue composition API functions
import { app } from "../firebase/firebase";
import { getDatabase, ref as dbRef, get } from 'firebase/database';
import axios from 'axios';
// import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const firebaseDatabaseURL = 'https://wad2-proj-642be-default-rtdb.asia-southeast1.firebasedatabase.app/';
// const path = '/games.json'; // Replace with the path to your data
const applicationsPath = '/borrowApplications.json'



export default {
    setup() {
        const firebaseData = ref(null);

        onMounted(async () => {
        try {
            const db = getDatabase(app);
            const databaseRef = dbRef(db, 'games');

            const snapshot = await get(databaseRef);

            if (snapshot.exists()) {
            const data = snapshot.val();
            firebaseData.value = data; // Update the data property with fetched data
            } else {
            console.log('No data available');
            }
        } catch (error) {
            console.error('Error reading data from Realtime Database:', error);
        }
        });

        return {
        firebaseData,
        };
    },

    data(){
        return{
        applications: [],      
        reviewedApplications: [],  
        }
    },

    methods: {
        gotoEvent(listingid) {
            this.$router.push('/' + listingid)
            this.$router.push({ name: 'viewGame', params: { gameID: listingid } })
        },

        getApplicationsData() {
            axios
            .get(firebaseDatabaseURL + applicationsPath)
            .then((response) => {
                
                // initiate application data 
                for (let app in response.data) {
                    if (response.data[app].status == "Pending") {
                        this.applications.push(response.data[app]);
                    } else {
                        this.reviewedApplications.push(response.data[app]);
                    }
                }

                // add in the game data for each application
                // for (let app in this.applications) {
                //     axios
                //     .get(firebaseDatabaseURL + path)
                //     .then((response) => {
                //     if (typeof response.data === 'object') {
                //         let returnListing = response.data[this.applications[app].gameID];
                //         // Initialize Firebase Storage
                //         const storage = getStorage();                
                //         if (Object.prototype.hasOwnProperty.call(returnListing, "img")) {
                //             if (returnListing.img) {
                //             const imageRef = storageRef(storage, returnListing.img);
                //             getDownloadURL(imageRef)
                //                 .then((url) => {
                //                 // Update the 'img' property of the listing with the new URL
                //                 returnListing.img = url;
                //                 })
                //                 .catch((error) => {
                //                 console.error('Error getting download URL for image:', error);
                //                 });
                //             }
                //         }
                    
                //         this.applications[app].gameData = returnListing;
                //     } else {
                //         console.error('Response data is not an object:', response.data);
                //     }
                //     })
                //     .catch((error) => {
                //     console.error('Error fetching data:', error);
                //     });
                // }
                // console.log(this.applications)
                
            })
            .catch((error) => {
            console.error('Error fetching applications data:', error);
            });
        },

        updateApplication(applicationID, status) {
            if (status == "approve") {
                // update the application status to approved
                axios
                .patch(firebaseDatabaseURL + "/borrowApplications/" + applicationID + ".json", {
                    status: "Approved",
                })
                .then((response) => {
                    console.log(response);
                    // remove the application from the list of applications
                    for (let app in this.applications) {
                        if (this.applications[app].applicationID == applicationID) {
                            this.reviewedApplications.push(this.applications[app]);
                            this.applications.splice(app, 1);
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            } else if (status == "reject") {
                // update the application status to rejected
                axios
                .patch(firebaseDatabaseURL + "/borrowApplications/" + applicationID + ".json", {
                    status: "Rejected",
                })
                .then((response) => {
                    console.log(response);
                    // remove the application from the list of applications
                    for (let app in this.applications) {
                        if (this.applications[app].applicationID == applicationID) {
                            this.reviewedApplications.push(this.applications[app]);
                            this.applications.splice(app, 1);
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
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

    created() {
        this.getApplicationsData();
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
        /* min-width: 15px; */
        height: auto;
    }

    .colWidth {
        width: 100%;
        max-width: 800px;
    }

    .statusBar {
        border-radius: 25px;
        padding: 5px;
        color: white;
        text-align: center;
        width: fit-content;
    }

    .marginTop {
    height: 80px;
    }

    .highlighted {  
        background: linear-gradient(transparent 40%, #070F5F 40%);
    }

    .reviewBox {
        color: #7ba7bb;
        background-color: #d8e5eb;
    }

    hr {
        height: 2px;
    }
</style>
