<template>

<div id="form-create">
        <div class="b-row" align="center">
            <b-col cols="6">
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form">
                        <b-form-group id="input-group-1"  label="Animal name:" label-for="input-1">
                            <b-form-input
                                    id="input-1"
                                    required
                                    placeholder="Enter name"
                                    v-model="form.animal_name"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Animal kind:" label-for="input-2">
                            <b-form-input
                                    id="input-2"
                                    required
                                    placeholder="Enter kind"
                                    v-model="form.animal_kind"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-3" label="Entry date:" label-for="input-3">
                            <b-form-input
                                    id="input-3"
                                    required
                                    placeholder="Enter date"
                                    v-model="form.animal_entry_date"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-4" label="Create on:" label-for="input-4">
                            <b-form-input
                                    id="input-4"
                                    required
                                    placeholder="Animal create on"
                                    v-model="form.animal_created_on"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-5" label="Entry branch:" label-for="input-5">
                            <b-form-input
                                    id="input-5"
                                    required
                                    placeholder="Enter branch"
                                    v-model="form.branch_id"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-6" label="Entry status:" label-for="input-6">
                            <b-form-input
                                    id="input-6"
                                    required
                                    placeholder="Enter status id"
                                    v-model="form.animal_status_id"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-7" label="Entry age:" label-for="input-7">
                            <b-form-input
                                    id="input-7"
                                    required
                                    placeholder="Age animal"
                                    v-model="form.animal_age"
                            ></b-form-input>
                        </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button> <br>
                    </b-form> <br><br><br><br><br>
            </b-col>
        </div>
</div>
</template>

<script>

    export default {
        name: "form-create",
        data() {
            return {
                form: {
                    animal_name: '',
                    animal_kind: '',
                    animal_entry_date: '',
                    animal_created_on: '',
                    branch_id: '',
                    animal_status_id: '',
                    animal_age: '',
                },
                show: true
            }
        },

        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                this.createAnimal({
                    animal_name: this.form.animal_name,
                    animal_kind: this.form.animal_kind,
                    animal_entry_date: this.form.animal_entry_date,
                    animal_created_on: this.form.animal_created_on,
                    branch_id: this.form.branch_id,
                    animal_status_id: this.form.animal_status_id,
                    animal_age: this.form.animal_age,
                });
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.name = ''
                this.form.kind = ''
                this.form.dateEntry = ''
                this.form.createOn = ''
                this.form.branch = ''
                this.form.status = ''
                this.form.age = ''

                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => { this.show = true })
            },

            createAnimal(data){
                this.$store.dispatch('createAnimal',data).then(
                    response => { this.$router.push({name:'home'});
                        console.log('Animal create')},
                    error => { console.log('Error')}
                )
            },

        }

    }
</script>

<style>

</style>