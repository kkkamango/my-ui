import {createWebHistory, createRouter} from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

const routes = [
    {
        path : '/'
        , name : HelloWorld
        , component : HelloWorld
        // , redirect : '/board/list' // 해당 경로로 리다이렉팅
    }, {
        path : '/board/list'
        // 코드 스플리팅 (다이나믹 임포트 : 최초의 파일을 로딩하지 않고 해당 path로 이동시 로딩)
        , component : () => import('@/components/board/List')
    }, {
        path: '/board/view/:id'
        , component: () => import('@/components/board/View')
    }, {
        path: '/board/form'
        , component: () => import('@/components/board/FormT1')
        // , component: () => import('@/components/board/Form')
    }, {
        path: '/admin/category/list'
        , component: () => import('@/components/category/List')
    }, {
        path: '/admin/category/view/:id'
        , component: () => import('@/components/category/View')
    }, {
        path: '/admin/category/form'
        , component: () => import('@/components/category/Form')
    },{
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/components/common/Error404')
    },
];

const router = createRouter({
    history : createWebHistory()
    , routes
});

router.resolve({
    name: 'not-found',
    params: { pathMatch: ['not', 'found'] },
}).href // '/not/found'

export default router;
