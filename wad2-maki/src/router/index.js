import { createRouter, createWebHistory } from 'vue-router';
import testPage from '../views/testPage.vue';


const routes = [
  // Other routes
    {
    path: '/',
    name: 'testPage',
    component: testPage,
    },
    

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;