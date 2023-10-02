import { createRouter, createWebHistory } from 'vue-router';
import testPage from '../views/testPage.vue';
import borrowPage from '../views/borrowPage.vue';


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
    

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;