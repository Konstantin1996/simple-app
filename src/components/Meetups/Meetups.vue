<template>
  <v-container>
    <v-layout>
      <v-flex class="mx-auto" xs12>
        <v-card
          v-for="meetup in meetups"
          :key="meetup.id"
          class="d-flex mt-3 purple grey lighten-3"
        >
          <v-flex xs4 sm5 lg3>
            <v-img height="200px" cover :src="meetup.imageURL"></v-img>
          </v-flex>
          <v-flex class="d-flex flex-column" xs8 sm7 lg9>
            <v-card-title>{{meetup.title}}</v-card-title>
            <v-card-text>{{meetup.desc}}</v-card-text>
            <v-card-actions class="align-self-end mt-auto">
              <v-btn :to="`/meetups/${meetup.id}`">Show details</v-btn>
            </v-card-actions>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Meetups",

  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    }
  }
};
</script>

<style>
</style>