import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Info from './views/Info.vue'
import Contact from './views/Contact.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'home', component: Home},
    { path: '/about', name: 'about', component: About},
    { path: '/info', name: 'info', component: Info},
    { path: '/contact', name: 'contact', component: Contact},
]

// Saves the position of the scroll when navigating between pages
const scrollBehavior: RouterScrollBehavior = async (to, from, savedPosition) => {
    if (savedPosition) {
        console.log('Navigating to saved position:', savedPosition);
        return savedPosition;
    } else if (to.hash) {
        console.log('Navigating to hash:', to.hash);
        await new Promise(resolve => setTimeout(resolve, 200));
        return {
            el: to.hash,
            behavior: 'smooth'
        };
    } else {
        console.log('Scrolling to top');
        return { top: 0 };
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior
})

export default router