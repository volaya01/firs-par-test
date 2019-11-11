<template>
    <div id="form-create">
        <div class="b-row" align="center">
            <b-col cols="6">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form">

                    <b-form-group id="input-group-5" label="Update id Animal:" label-for="input-5">
                        <b-form-input
                                id="input-5"
                                required
                                placeholder=""
                                v-model="form.animal_id"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-1"  label="Update animal name:" label-for="input-1">
                        <b-form-input
                                id="input-1"
                                required
                                placeholder=""
                                v-model="form.animal_name"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Update animal kind:" label-for="input-2">
                        <b-form-input
                                id="input-2"
                                required
                                placeholder=""
                                v-model="form.animal_kind"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-7" label="Update entry age:" label-for="input-7">
                        <b-form-input
                                id="input-7"
                                required
                                placeholder=""
                                v-model="form.animal_age"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-6" label="Update status id:" label-for="input-6">
                        <b-form-input
                                id="input-6"
                                required
                                placeholder=""
                                v-model="form.animal_status_id"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-4" label="Update create on:" label-for="input-4">
                        <b-form-input
                                id="input-4"
                                required
                                placeholder=""
                                v-model="form.animal_created_on"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Update picture address:" label-for="input-3">
                        <b-form-input
                                id="input-3"
                                required
                                placeholder=""
                                v-model="form.animal_picture_address"
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

       // props: ['idAnimal'],

        name: "form-update",
        data() {
            return {
                form: {
                    animal_id: '',
                    animal_name: '',
                    animal_kind: '',
                    animal_age: '',
                    animal_status_id: '',
                    animal_created_on: '',
                    animal_picture_address: '',

                },
                show: true
            }
        },

        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                this.updateAnimal({
                    animal_id: this.form.animal_id,
                    animal_name: this.form.animal_name,
                    animal_kind: this.form.animal_kind,
                    animal_age: this.form.animal_age,
                    animal_status_id: this.form.animal_status_id,
                    animal_created_on: this.form.animal_created_on,
                    animal_picture_address: this.form.animal_picture_address,

                });
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.id = '',
                this.form.name = '',
                this.form.kind = '',
                this.form.age = '',
                this.form.status = '',
                this.form.createOn = '',
                this.form.picture = '',

                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {
                    this.show = true
                });
            },
            updateAnimal(data) {
                this.$store.dispatch('updateAnimal', data).then(
                    response => {
                        this.$router.push({name: 'home'});
                        console.log('Animal update')
                    },
                    error => {
                        console.log('Error')
                    }
                )
            },
        }
    }
</script>

<style scoped>

</style>