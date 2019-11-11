<template>

    <div id="branch-view" class="branch-view">
        <h1>These are the branches of TITOAnimals</h1>

        <b-card-group deck md="10" offset="2">
            <branch-card v-for="branch in orderBy(branches, branch_name)" :key="branch.branch_name" :branch="branch"></branch-card>
        </b-card-group>

    </div>

    <!-- <branch-card></branch-card>-->

</template>

<script>
    import BranchCard from "../components/BranchCard";
    import Vue2Filters from 'vue2-filters'

    export default {

        name: "BranchView",
        components:{ BranchCard },
        mixins:[Vue2Filters.mixin],

        computed: {
            branches(){
                return this.$store.getters.getBranches();
            }
        },
    }
</script>

<style scoped>

</style>