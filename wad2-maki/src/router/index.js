import { createRouter, createWebHistory } from 'vue-router';
import testPage from '../views/testPage.vue';
import borrowPage from '../views/borrowPage.vue';
import demoPage from '../views/demoPage.vue';
import feedbackPage from '../views/feedbackPage.vue';
import payPage from '../views/payPage.vue';
import reviewPage from '../views/reviewPage.vue';

const routes = [
    // Other routes

    {
        path: '/',
        name: 'testPage',
        component: testPage,
    },

    {
        path: '/',
        name: 'borrowPage',
        component: borrowPage, // Example: Import your Home component
    },

    {
        path: '/',
        name: 'demoPage',
        component: demoPage,
    },
    {
        path: '/',
        name: 'feedbackPage',
        component: feedbackPage,
    },{
        path: '/',
        name: 'payPage',
        component: payPage,
    },
    {
        path: '/',
        name: 'reviewPage',
        component: reviewPage,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

