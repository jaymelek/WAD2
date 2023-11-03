import { createRouter, createWebHistory } from 'vue-router';
import borrowPage from '../views/borrowPage.vue';
import demoPage from '../views/demoPage.vue';
import feedbackPage from '../views/feedbackPage.vue';
import payPage from '../views/payPage.vue';
import reviewPage from '../views/reviewPage.vue';
import paymentSuccess from '../views/paymentSuccess.vue';
import profilePage from '../views/profilePage.vue';
import landingPage from '../views/landingPage.vue';
import viewGame from '../views/viewGame.vue';
import borrowGame from '../views/borrowGame.vue';
import loginPage from '../views/loginPage.vue';
import pendingRequests from '../views/pendingRequests.vue';
import addListing from '../views/addListing.vue';
import registerPage from '../views/registerPage.vue';
import aboutPage from '../views/aboutPage.vue';

const routes = [
    // Other routes

    {
        path: '/',
        name: 'landingPage',
        component:landingPage,
        meta: { backgroundColor: 'transparent'},
    },


    {
        path: '/borrowPage',
        name: 'borrowPage',
        component: borrowPage, // Example: Import your Home component
    },


    {
        path: '/demoPage',
        name: 'demoPage',
        component: demoPage,
    },

    {
        path: '/feedbackPage',
        name: 'feedbackPage',
        component: feedbackPage,
    },
    
    {
        path: '/payPage',
        name: 'payPage',
        component: payPage,
    },

    {
        path: '/reviewPage',
        name: 'reviewPage',
        component: reviewPage,
    },
    
    {
        path: '/payPage/paymentSuccess',
        name: 'paymentSuccess',
        component: paymentSuccess,
    },

    {
        path: '/profilePage',
        name: 'profilePage',
        component: profilePage,

    },

    {
        path: '/viewGame/:gameID',
        name: 'viewGame',
        component: viewGame,
    },

    {
        path: '/borrowGame/:gameID',
        name: 'borrowGame',
        component: borrowGame,
    },

    {
        path: '/loginPage',
        name: 'loginPage',
        component: loginPage
    },

    {
        path: '/pendingRequests',
        name: 'pendingRequests',
        component: pendingRequests,
        // beforeEnter: authGuard, // if we want to make it extra secure that members cannot access this page
    },
    
    {
        path: '/addListing',
        name: 'addListing',
        component: addListing,
        // beforeEnter: authGuard, // if we want to make it extra secure that members cannot access this page
    },

    {
        path: '/registerPage',
        name: 'registerPage',
        component: registerPage
    },

    {
        path: '/aboutPage',
        name: 'aboutPage',
        component: aboutPage
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

