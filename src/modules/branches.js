import BranchAPI from '../api/branch.js';
import AnimalsAPI from "../api/animals";

export const branches = {
    state: {
        branches: [],
        branchesLoadStatus: 0,
    },
    actions: {
        loadBranches( { commit } /*, permissions */ ){
            commit( 'setBranchesLoadStatus', 1 );

            return new Promise((resolve, reject) => {
                BranchAPI.getBranchAPI()
                    .then( function( response ){
                        commit( 'setBranches', response.data );
                        commit( 'setBranchesLoadStatus', 2 );
                        resolve(response);
                    })
                    .catch( function(error){
                        commit( 'setBranches', [] );
                        commit( 'setBranchesLoadStatus', 3 );
                        reject(error);
                    });
            });
        }
    },
    deleteBranches({ commit }, data){

        commit ( 'setBranchesLooadStatus', 1 );

        return new Promise((resolve, reject) => {
            AnimalsAPI.deleteBranchAPI(data)
                .then(function (response) {
                    commit('setBranches', response.data);
                    commit('setBranchesLoadStatus', 3);
                    reject(error);
                })
                .catch(function (error) {
                    commit('setBranches', []);
                    commit('setBranchesLoadStatus', 3);
                    reject(error);
                });
        })
    },
    updateBranches({ commit }, data){

        commit ( 'setBranchesLooadStatus', 1 );

        return new Promise((resolve, reject) => {
            AnimalsAPI.updateBranchAPI(data)
                .then(function (response) {
                    commit('setBranches', response.data);
                    commit('setBranchesLoadStatus', 3);
                    reject(error);
                })
                .catch(function (error) {
                    commit('setBranches', []);
                    commit('setBranchesLoadStatus', 3);
                    reject(error);
                });
        })
    },
    mutations: {
        setBranchesLoadStatus( state, status ){
            state.branchesLoadStatus = status;
        },

        setBranches( state, branches){
            state.branches = branches;
        }
    },
    getters: {
        getBranchesLoadStatus( state ){
            return state.branchesLoadStatus;
        },

        getBranches( state ){
            return state.branches;
        },
    }
}