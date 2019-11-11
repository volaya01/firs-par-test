<template>
    <div id="form-login" class="form-login">
        <br><br>
        <b-row>
            <b-col cols="4"></b-col>
            <b-col cols="4" > <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            label="Email address:"
                            label-for="input-1"
                            description="We'll never share your email with anyone else."
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Enter email"
                        ></b-form-input>
                    </b-form-group>

                    <label for="text-password">Password</label>
                    <b-input type="password" id="text-password" aria-describedby="password-help-block" v-model="form.password"></b-input>
                    <b-form-text id="password-help-block"> </b-form-text>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>

    import {ANIMALS_CONFIG} from "../config";

    export default {
        name: "formLogin",
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()

                var user = this.validateUser();

                if (user !== null){
                    this.$store.dispatch('changeUser',user).then(
                        response => {
                            this.$router.push({name:'home'});
                            console.log('Successful entry')
                        },
                        error => { console.log('Error in credentials')}
                    )
                }
            },
            onReset(evt) {
                evt.preventDefault()

                // Reset our form values
                this.form.email = ''
                this.form.password = ''

                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => { this.show = true })
            },
            validateUser(){

                var flag = false;
                var user = null;

                for (var i = 0; i < ANIMALS_CONFIG.GLOBAL_USERS.length; i++) {
                    if (ANIMALS_CONFIG.GLOBAL_USERS[i].email === this.form.email && !flag){
                        if (this.validatePassword(ANIMALS_CONFIG.GLOBAL_USERS[i])) {
                            user = ANIMALS_CONFIG.GLOBAL_USERS[i]
                        }
                    }
                }
                return user
            },
            validatePassword(user){
                if (user.password === this.form.password){
                    return true
                }
                return false
            }
        }
    }
</script>

<style scoped>

</style>