import { ANIMALS_CONFIG } from '../config.js';

export const user = {
    state: {
        user: null,
        userLoadStatus: 0,
        userNew: 0,
    },
    actions: {
        initialUser( { commit }){
            commit( 'setUserNew', 1 );
            commit( 'setUser', ANIMALS_CONFIG.GLOBAL_USERS[0] );
            commit( 'setUserLoadStatus', 2 );
        },
        changeUser({commit},user){
            commit( 'setUser', user );
            commit( 'setUserLoadStatus', 2 );
            commit( 'setUserNew', 2 );
        }
    },
    mutations: {
        setUserLoadStatus( state, status ){
            state.userLoadStatus = status;
        },

        setUser( state, user){
            state.user = user;
        },
        setUserNew(state,userNew){
            state.userNew = userNew
        },
    },
    getters: {
        getUserLoadStatus( state ){
            return state.userLoadStatus;
        },

        getUser( state ){
            return state.user;
        },
        getUserNew(state){
            return state.userNew
        }
    }
}