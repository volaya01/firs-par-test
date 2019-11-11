import AnimalsAPI from '../api/animals.js';

export const animals = {
    state: {
        animals: [],
        animalsLoadStatus: 0,
    },
    actions: {
        loadAnimals( { commit } /*, permissions */ ){
            commit( 'setAnimalsLoadStatus', 1 );

            return new Promise((resolve, reject) => {
                AnimalsAPI.getAnimalsAPI()
                    .then( function( response ){
                        commit( 'setAnimals', response.data );
                        commit( 'setAnimalsLoadStatus', 2 );
                        resolve(response);
                    })
                    .catch( function(error){
                        commit( 'setAnimals', [] );
                        commit( 'setAnimalsLoadStatus', 3 );
                        reject(error);
                    });
            });
        },
        createAnimal({ commit }, data){

            commit( 'setAnimalsLoadStatus', 1 );

            return new Promise((resolve, reject) => {
                AnimalsAPI.postAnimalsAPI(data)
                    .then(function (response) {
                        commit('setAnimals', response.data);
                        commit('setAnimalsLoadStatus', 2);
                        resolve(response);
                    })
                    .catch(function (error) {
                        commit('setAnimals', []);
                        commit('setAnimalsLoadStatus', 3);
                        reject(error);
                    });
            });
        },

        deleteAnimal({ commit }, data){

            commit ( 'setAnimalsLooadStatus', 1 );

            return new Promise((resolve, reject) => {
                AnimalsAPI.deleteAnimalsAPI(data)
                    .then(function (response) {
                        commit('setAnimals', response.data);
                        commit('setAnimalsLoadStatus', 3);
                        reject(error);
                    })
                    .catch(function (error) {
                        commit('setAnimals', []);
                        commit('setAnimalsLoadStatus', 3);
                        reject(error);
                    });
            })
        },

        updateAnimal({ commit }, data){

            commit ( 'setAnimalsLooadStatus', 1 );

            return new Promise((resolve, reject) => {
                AnimalsAPI.updateAnimalsAPI(data)
                    .then(function (response) {
                        commit('setAnimals', response.data);
                        commit('setAnimalsLoadStatus', 3);
                        reject(error);
                    })
                    .catch(function (error) {
                        commit('setAnimals', []);
                        commit('setAnimalsLoadStatus', 3);
                        reject(error);
                    });
            })
        }
    },
    mutations: {
        setAnimalsLoadStatus( state, status ){
            state.animalsLoadStatus = status;
        },

        setAnimals( state, animals ){
            state.animals = animals;
        }
    },
    getters: {
        getAnimalsLoadStatus( state ){
            return state.animalsLoadStatus;
        },

        getAnimals( state ){
            return state.animals;
        },
    }
}