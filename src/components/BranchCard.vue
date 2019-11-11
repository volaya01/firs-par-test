<template>

    <div id="branch-card" class="branch-card" v-show="show" align="center">
        <b-card
                :title="branch.branch_name"
                :img-src="img"
                img-alt="branch.branch_name"
                tag="article"
                img-height="230"
                img-width="100"
                style="max-width: 20rem;"
                class="mb-2"
        >
            <b-card-text> {{ branch.branch_address}}</b-card-text>
            <b-card-text>{{ branch.branch_phone}}</b-card-text>

            <b-button href="#" variant="primary" v-if="user.id === 3">Update branch</b-button>
        </b-card>
    </div>
</template>

<script>

    export default {
        name: "BranchCard",
        props: ['branch'],
        data(){
            return {
                show: true,
                img: ""
            }
        },
        created() {

           this.img = require('../images/branch.png')

        },
        computed: {
            branches(){
                return this.$store.getters.getBranches
            }
        },

    }
</script>

<style scoped>

</style>