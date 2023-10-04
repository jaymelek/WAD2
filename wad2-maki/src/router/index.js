import { createRouter, createWebHistory } from 'vue-router';
import testPage from '../views/testPage.vue';
import borrowPage from '../views/borrowPage.vue';
import landingPage from '../views/landingPage.vue'


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
        path: '/landingPage',
        name: 'landingPage',
        component: landingPage, // Example: Import your Home component
    },
    

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;