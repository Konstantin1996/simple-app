<template>
  <v-container v-if="!isSpinnerLoading">
    <SearchPanel/>
    <v-layout>
      <v-flex class="mx-auto" xs12>
        <v-card
          :key="meetup.id"
          v-for="meetup in meetups"
          class="d-flex mt-3 purple grey lighten-3"
        >
          <v-flex xs4 sm5 lg3>
            <v-img height="200px" contain :src="setImage(meetup.imageURL)"></v-img>
          </v-flex>
          <v-flex class="d-flex flex-column" xs8 sm7 lg9>
            <v-card-title>{{ meetup.title }}</v-card-title>
            <v-card-text>{{ showDescription(meetup.desc) }}</v-card-text>
            <v-card-text>Date: {{ meetup.date | formatDate }}</v-card-text>
            <v-card-actions class="align-self-end mt-auto">
              <v-btn :to="`/meetups/${meetup._id}`">
                Show details
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <Spinner v-else/>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import Spinner from '../Interface/Spinner/Spinner'
import SearchPanel from './SearchPanel'

const MAX_TEXT_SIZE = 200;

export default {
  name: "Meetups",

  mounted() {
    this.fetchMeetups();
  },

  components: {
    Spinner,
    SearchPanel
  },

  methods: {
    ...mapActions(['fetchMeetups']),
    
    setImage(image) {
        return image || require('../../assets/defaultImage.png');
    },
    
    showDescription(description) {
        // need to refactor typeError here
        if(description) {
          const textExceedLimit = description.length > MAX_TEXT_SIZE;
          return textExceedLimit ? description.substring(0, 200) : description;
        }
    }
  },

  computed: {
    ...mapGetters(['meetups', 'isSpinnerLoading']),
  },

  filters: {
    formatDate: function(value) {
      return new Date(value).toDateString();
    }
  }
};
</script>

<style>
</style>