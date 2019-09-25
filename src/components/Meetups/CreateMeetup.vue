<template>
  <v-container>
    <v-layout row>
      <v-flex my-5 class="text-center">
        <h2>Create meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form>
          <v-layout row>
            <v-flex mx-auto xs6>
              <v-text-field v-model="title" name="title" label="Title" id="title" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex mx-auto xs6>
              <v-text-field
                v-model="location"
                name="location"
                label="Location"
                id="location"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex mx-auto xs6>
              <v-text-field v-model="imageURL" name="imageURL" label="URL" id="imageURL" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row v-if="imageURL">
            <v-flex mx-auto xs6>
              <img height="300" :src="imageURL" alt="image" />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex mx-auto xs6>
              <v-textarea
                v-model="description"
                rows="10"
                name="description"
                label="Description"
                id="description"
              >hey ho lets go</v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 offset-xs3 my-5>
              {{formIsValid}}
              <v-btn :disabled="!formIsValid">Create meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      location: "",
      imageURL: "",
      description: ""
    };
  },

  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageURL !== "" &&
        this.description !== ""
      );
    }
  }
};
</script>

<style>
</style>