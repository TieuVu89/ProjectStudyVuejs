import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Redirect from './components/Redirect.vue';

const routes = [
    { path: '/home', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/redirect', component: Redirect },
];
export default routes;