import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: { name: 'login' }},
    { path: '/login', name: 'login', component: () => import('./views/Login.vue') },
    { path: '/home', name: 'home', component: () => import('./views/Home.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

/*
router.beforeEach((to, from, next) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(!user && router.name != 'login') {
            // TODO commit changes in store
            router.push({ name: 'login' });
        } else {
            next();
        }
    })
});
*/

export default router;