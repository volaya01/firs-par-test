<template>
    <div id="animal-create" class="animal-create">
        <h1>Create new animal</h1>
        <create-animal-form></create-animal-form>
    </div>

</template>

<script>
    import CreateAnimalForm from '@/components/CreateAnimalForm.vue'

    export default {
        name: 'AnimalCreate',
        components: {
            CreateAnimalForm
        }
    }
</script>

<style scoped>

</style>