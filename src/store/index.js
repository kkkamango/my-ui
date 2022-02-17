import {createStore} from 'vuex';

export default createStore({
    // 여러 컴포넌트에 공유되는 데이터
    state : {
        username : ''
    },
    // 데이터(state)를 변경하는 것
    mutations : {
        setUsername(state, username){
            state.username = username;
        }
    },
    getters: {
        username(state){
            return state.username;
        }
    }
// import Vue from 'vue';
// import Vuex from 'vuex';
//
// Vue.use(Vuex);
//
// export default new Vuex.Store({
// });
});
