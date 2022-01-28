import {createWebHistory, createRouter} from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
// import List from '@/components/board/List';
// import Error404 from '@/components/common/Error404';

const routes = [
    {
        path : '/'
        , name : HelloWorld
        , component : HelloWorld
    }, {
        path : '/board/list'
        // , name : List
        // , component : List
        , component : () => import('@/components/board/List')
    // }, {
    //     path : '/catchAll(.*)'
    //     , component : Error404
    },
];

const router = createRouter({
    history : createWebHistory()
    , routes
});

export default router;