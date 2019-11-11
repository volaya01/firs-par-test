<template>
  <div id="app" class="font">
    <div id="nav">
      | <router-link to="/">Home</router-link> |
      <router-link to="/animalCreate" v-if="user.id == 2">Register new animal</router-link> |
      <router-link to="/branchView" v-if="user.id == 4 || user.id == 3">View branch</router-link> |
      <router-link to="/login" v-if="loginControl !== 2">Login</router-link> |
      <b-button variant="link" v-on:click="exitUser" v-if="loginControl === 2">Exit</b-button>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    created() {
      this.initialLoadAnimals();

      this.initialLoadBranches();

      if (this.$store.getters.getUserLoadStatus !== 2){
        this.$store.dispatch('initialUser').then(
                response => { console.log('User loaded successfully')},
                error => { console.log('Error loading user')}
        )
      }
    },
    computed:{
      user(){
        return this.$store.getters.getUser
      },

      loginControl(){
        return this.$store.getters.getUserNew
      },

      branch(){
        return this.$store.getters.getBranches
      }
    },
    methods:{
      initialLoadAnimals(){
        if (this.$store.getters.getAnimalsLoadStatus !== 2){
          this.$store.dispatch('loadAnimals').then(
                  response => { console.log('Animal loaded successfully')},
                  error => { console.log('Error loading animal')}
          )
        }
      },

      initialLoadBranches(){
        if (this.$store.getters.getBranchesLoadStatus !== 2){
          this.$store.dispatch('loadBranches').then(
                  response => { console.log('Branch loaded successfully')},
                  error => { console.log('Error loading branch')}
          )
        }
      },

      exitUser(){
        this.$store.dispatch('initialUser').then(
                response => { console.log('Successfully exit')},
                error => { console.log('Error exit')}
        )
      },
    }
  }
</script>


<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F22233;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #F22233;
}
.font{ background-color: lightseagreen; }


</style>
