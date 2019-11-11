<template>

    <div id="animal-card" class="animal-card" v-show="show" align="center">
        <b-card
                :title="animal.animal_name"
                :img-src="img"
                img-alt="animal.animal_name"
                tag="article"
                img-height="230"
                img-width="100"
                style="max-width: 20rem;"
                class="mb-2"
        >
            <b-card-text>I have {{ animal.animal_age}} years old, I'am {{ animal.animal_kind}} and</b-card-text>
            <b-card-text>I'am here since : {{ animal.animal_entry_date | moment("dddd, MMMM Do YYYY") }} :(</b-card-text>

            <b-button href="/updateAnimal" variant="primary" v-if="user.id === 2">Update</b-button>
            <b-button v-model="id_animal" @submit="Onsubmit" v-b-modal.delete variant="primary" v-if="user.id === 2">Delete</b-button>
            <b-button v-model="id_status" @click="update"  v-b-modal.update variant="primary" v-if="user.id === 1">Adopt it</b-button>

            <b-modal id="delete" hide-footer="false">Are you sure you want to remove this animal?
                <div class="w-100">
                    <p class="float-Right"></p>
                    <b-button variant="primary" size="sm" class="float-right" @click="show=false">Delete</b-button>
                </div>
            </b-modal>

            <b-modal id="update" hide-footer="false">Thank you, I promise to fill you with love <3</b-modal>

        </b-card>
    </div>

</template>

<script>

    import { EventBus } from '../event-bus'

    export default {
        name: "AnimalCard",
        props: ['animal'],
        data(){
            return {
                show: true,
                img: "",
                id_status: 3,

                id_animal: {
                    animal_id: '',
                }
            }
        },
        created() {
            this.showBranchEvent();

            if (this.animal.animal_picture_address){
                this.img = this.animal.animal_picture_address
            }else {
                this.img = require('../images/mascota_por_defecto.jpg')
            }
        },
        computed: {
            user(){
                return this.$store.getters.getUser
            }
        },
        methods: {
            showBranchEvent(){
                EventBus.$on('showBranch', function( data ){
                    if (data.branch === 0 || this.animal.branch_id === data.branch){ this.show = true }else { this.show = false }
                }.bind(this));
            },

            Onsubmit(evt){
                evt.preventDefault();
                this.deleteAnimal({
                    id: this.id_animal.animal_id,
                })
            },

            deleteAnimal(id_animal){
                this.$store.dispatch('deleteAnimal',id_animal).then(
                    response => { this.$router.push({name:'home'});
                        console.log('Animal delete')},
                    error => { console.log('Error in delete animal')}
                )
            },
            update(evt){
                evt.preventDefault();
                this.UpdateStatusAnimal({
                    id_status: this.id_status,
                });
            },
            UpdateStatusAnimal(animal_status_id){
                this.$store.dispatch('UpdateAnimal',animal_status_id).then(
                    response => { this.$router.push({name: 'home'});
                        console.log('Adopted animal')},
                    error => { console.log('Error in adopting animal')}
                )
            }
        }
    }
</script>

<style scoped>
    .animal-card{
        align-content: center;
        border-radius: 5px;
        width: 30%;
        margin-left: 30px;
    }
</style>