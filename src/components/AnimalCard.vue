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

            <b-button href="#" variant="primary" v-if="user.id === 2">Edit</b-button>
            <b-button href="#" variant="primary" v-if="user.id === 2">Delete</b-button>

            <b-button href="#" variant="primary" v-if="user.id === 1">Adopt it</b-button>

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
                img: ""
            }
        },
        created() {
            this.showBranchEvent();

            if (this.animal.animal_picture_address){
                this.img = this.animal.animal_picture_address
            }else {
                this.img = require('../assets/mascota_por_defecto.jpg')
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