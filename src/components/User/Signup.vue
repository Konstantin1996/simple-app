<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
          <form v-on:submit="onSignUp">
              <v-layout row>
                <v-flex xs12 mx-5>
                  <v-text-field
                    name="email"
                    label="Mail"
                    id="email"
                    type="email"
                    v-model="email"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12 mx-5>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    v-model="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12 mx-5>
                  <v-text-field
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    :rules="[checkPasswords]"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex mx-5>
                  <v-btn type="submit">Sign up</v-btn>
                </v-flex>
              </v-layout>
          </form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'SignUpForm',

  methods: {
    onSignUp() {
      // Vuex
      console.log(this.email, this.password, this.confirmPassword)
      return ;
    }
  },

  computed: {
    checkPasswords() {
      return this.password !== this.confirmPassword ? 'Password did not math' : ''
    }
  },

  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

}
</script>

<style>

</style>