import { createRouter, createWebHistory } from 'vue-router';
import testPage from '../views/testPage.vue';
import borrowPage from '../views/borrowPage.vue';
import demo from '../views/demo.vue';
import feedback from '../views/feedback.vue';
import pay from '../views/pay.vue';
import review from '../views/review.vue';

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
        name: 'demo',
        component: demo,
    },
    {
        path: '/',
        name: 'feedback',
        component: feedback,
    },{
        path: '/',
        name: 'pay',
        component: pay,
    },
    {
        path: '/',
        name: 'review',
        component: review,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

