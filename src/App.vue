<template>
  <div id="app" class="font">
    <div id="nav">
      | <router-link to="/">Home</router-link> |
      <router-link to="/animalCreate" v-if="user.id == 2">Register new animal</router-link> |
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

      //this.initialLoadBranches();

      if (this.$store.getters.getUserLoadStatus !== 2){
        this.$store.dispatch('initialUser').then(
                response => { console.log('Se cargo el usuario correctamente')},
                error => { console.log('Se presento un error al intentar cargar el usuario')}
        )
      }
    },
    computed:{
      user(){
        return this.$store.getters.getUser
      },
      loginControl(){
        return this.$store.getters.getUserNew
      }
    },
    methods:{
      initialLoadAnimals(){
        if (this.$store.getters.getAnimalsLoadStatus !== 2){
          this.$store.dispatch('loadAnimals').then(
                  response => { console.log('Se cargaron los animales correctamente')},
                  error => { console.log('Se presento un error al intentar cargar las estaciones')}
          )
        }
      },
      initialLoadBranches(){
        if (this.$store.getters.getBranchesLoadStatus !== 2){
          this.$store.dispatch('loadBranches').then(
                  response => { console.log('Se cargaron las ramas correctamente')},
                  error => { console.log('Se presento un error al intentar cargar las ramas')}
          )
        }
      },

      exitUser(){
        this.$store.dispatch('initialUser').then(
                response => { console.log('Se cargo el usuario correctamente')},
                error => { console.log('Se presento un error al intentar cargar el usuario')}
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
