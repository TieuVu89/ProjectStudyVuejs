import Computed from './components/Computed.vue';
import Watch from './components/Watch.vue';
import Binding from './components/Binding.vue';
import Redirect from './components/Redirect.vue';
import Event from './components/Event.vue'
import Rendering from './components/Rendering.vue'

const routes = [
    { path: '/computed', component: Computed },
    { path: '/watch', component: Watch },
    { path: '/binding', component: Binding },
    { path: '/redirect', component: Redirect },
    { path: '/event', component: Event },
    { path: '/rendering', component: Rendering },
];
export default routes;