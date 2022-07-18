import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from './store/user';

const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: { name: 'login' }},
    { 
        path: '/login',
        name: 'login',
        component: () => import('./views/Login.vue'),
        meta: {
            title: 'Login'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('./views/Home.vue'),
        redirect: { name: 'home-dashboard' },
        children: [
           {
            path: 'dashboard',
            name: 'home-dashboard',
            component: () => import('./views/HomeDashboard.vue'),
            meta: {
                title: 'Dashboard'
            }
           } 
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
/*
router.beforeEach((to, from, next) => {
    const auth = getAuth();
    const userStore = useUserStore()
    onAuthStateChanged(auth, (user) => {
        if(!user && router.name !== 'login') {
            // TODO commit changes in store
            userStore.removeUserData()
            router.push({ name: 'login' });
        } else {
            next();
        }
    })
});
*/

export default router;