import { createRouter, createWebHistory } from 'vue-router';
import testPage from '../views/testPage.vue';
import borrowPage from '../views/borrowPage.vue';
import demoPage from '../views/demoPage.vue';
import feedbackPage from '../views/feedbackPage.vue';
import payPage from '../views/payPage.vue';
import reviewPage from '../views/reviewPage.vue';
import paymentSuccess from '../views/paymentSuccess.vue';

const routes = [
    // Other routes

    {
        path: '/testPage',
        name: 'testPage',
        component: testPage,
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
    },{
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
        path: '/paymentSuccess',
        name: 'paymentSuccess',
        component: paymentSuccess,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

