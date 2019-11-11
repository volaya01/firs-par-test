<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->

    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="6"><h5>Filter by branch: </h5> <b-form-select v-model="branch_selected" :options="branch_options" v-on:change="toShowBranch"></b-form-select></b-col>
        <b-col cols="6"><h5>Order by: </h5> <b-form-select v-model="order" :options="options" ></b-form-select></b-col>
      </b-row>
    </b-container>
    <br>

    <b-card-group deck md="10" offset="2">
      <animal-card v-for="animal in orderBy(animals,order,direction)" :key="animal.animal_id" :animal="animal" :branch_selected="branch_selected"></animal-card>
    </b-card-group>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import AnimalCard from '@/components/AnimalCard.vue'

import { EventBus } from '../event-bus'

import Vue2Filters from 'vue2-filters'

export default {
  name: 'home',
  components: { HelloWorld, AnimalCard },
  mixins:[Vue2Filters.mixin],
  data(){
    return {
      order: 'animal_age',
      direction: -1,
      options: [
        { value: 'animal_age', text: 'animal_age' },
        { value: 'animal_name', text: 'animal_name' },
        { value: 'animal_kind', text: 'animal_kind' },
        { value: 'animal_entry_date', text: 'animal_entry_date' },
      ],
      branch_selected: 0,
      branch_options: [
        { value: 0, text: 'select city' },
        { value: 3, text: 'Manizales' },
        { value: 4, text: 'Bucaramanga' },
        { value: 5, text: 'Medellin' },
      ]
    }
  },
  created() {

  },
  computed: {
      animals(){
          return this.$store.getters.getAnimals;
      }
  },
  methods:{
    toShowBranch(event){
      EventBus.$emit('showBranch', { branch : event });
    }
  }
}
</script>
