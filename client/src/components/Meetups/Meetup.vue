<template>
  <div>
    <v-container v-if="!isSpinnerLoading">
      <v-layout row wrap>
        <v-flex>
          <v-card>
            <v-card-title>{{ singleMeetup.title }}</v-card-title>
            <v-img height="500px" :src="setImage(singleMeetup.imageURL)"></v-img>
            <v-card-text>
              <h2>Description</h2>
              <p>{{ singleMeetup.desc }}</p>
            </v-card-text>
            <v-card-text>
              <h2>Location</h2>
              <p>{{ singleMeetup.location }}</p>
            </v-card-text>
            <v-card-text>
              <h2>Date</h2>
              <p>{{ singleMeetup.date }}</p>
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
    <div v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Spinner from '../Interface/Spinner/Spinner'

export default {
  name: "Meetup",

  components: {
    Spinner
  },

  methods: {
    ...mapActions(['fetchSingleMeetup']),

    setImage(image) {
      return image || require('../../assets/defaultImage.png');
    }
  },
  
  computed: {
    ...mapGetters(['singleMeetup', 'isSpinnerLoading']),
  },

  mounted() {
    this.fetchSingleMeetup(this.$route.params.id);
  },
};
</script>

<style>
</style>