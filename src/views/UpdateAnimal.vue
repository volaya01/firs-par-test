<template>
    <div class="update-animal" id="update-animal"></div>
    <!--<h1>Update animal</h1>
   <update-animal-form>:animal="getAnimalById"</update-animal-form> -->
</template>

<script>
    import UpdateAnimalForm from "../components/UpdateAnimalForm";
    export default {
        name: "UpdateAnimal",
        components: {
            UpdateAnimalForm,
        },
        data(){
            return{
                id: this.$route.params.idAnimal,
                animal:[],
            }
        },
        created() {
            var animals = this.$store.getters.getAnimals;
            for (var i = 0; i < animals.length; i++){
                console.log(animals[i].animal_id)
                if (animals[i].animal_id === this.$route.params.idAnimal){ this.animal = animals[i]; }

            }
        },
        computed: {
            animals(){
                return this.$store.getters.getAnimals;
        },
            getAnimalById(){
                return this.$store.getters.getAnimalById(this.$route.params.idAnimal)
            }
        }
    }
</script>

<style scoped>

</style>