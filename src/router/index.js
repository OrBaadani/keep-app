import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/home.vue';
import keepApp from '@/pages/keep-app.vue';
import noteDetails from '@/pages/note-details.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'keep',
        component: keepApp,
        children: [
            {
                path: 'keep/:noteId',
                component: noteDetails,
            },
        ],
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../pages/about.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
