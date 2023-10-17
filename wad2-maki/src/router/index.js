import { createRouter, createWebHistory } from 'vue-router';
import testPage from '../views/testPage.vue';
import borrowPage from '../views/borrowPage.vue';
import demoPage from '../views/demoPage.vue';
import feedbackPage from '../views/feedbackPage.vue';
import payPage from '../views/payPage.vue';
import reviewPage from '../views/reviewPage.vue';
import landingPage from '../views/landingPage.vue';
import viewGame from '../views/viewGame.vue';
import borrowGame from '../views/borrowGame.vue';

const routes = [
    // Other routes

    {
        path: '/',
        name: 'landingPage',
        component:landingPage,
    },

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
        path: '/viewGame/:gameID',
        name: 'viewGame',
        component: viewGame,
    },

    {
        path: '/borrowGame/:gameID',
        name: 'borrowGame',
        component: borrowGame,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

