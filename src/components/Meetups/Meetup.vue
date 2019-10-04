<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <v-card-title>{{ meetup.title }}</v-card-title>
          <v-img height="400px" cover :src="meetup.imageURL"></v-img>
          <v-card-text>
            <h2>Description</h2>
            <p>{{ meetup.desc }}</p>
          </v-card-text>
          <v-card-text>
            <h2>Location</h2>
            <p>{{ meetup.location }}</p>
          </v-card-text>
          <v-card-text>
            <h2>Date</h2>
            <p>{{ meetup.date }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn>Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn to="/meetups">
              Back
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Meetup",

  props: {
    id: String
  },

  computed: {
    meetup() {
      return this.$store.getters.loadMeetup(this.id);
    }
  }
};
</script>

<style>
</style>