import Computed from './components/Computed.vue';
import Watch from './components/Watch.vue';
import Binding from './components/Binding.vue';
import Redirect from './components/Redirect.vue';

const routes = [
    { path: '/computed', component: Computed },
    { path: '/watch', component: Watch },
    { path: '/binding', component: Binding },
    { path: '/redirect', component: Redirect },
];
export default routes;