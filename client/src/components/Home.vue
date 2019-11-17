<template>
  <v-container fluid>
    <v-flex class="mx-auto my-10" lg8 xs12>
      <v-layout>
          <v-carousel>
            <v-carousel-item
              v-for="(meetup, i) in meetups"
              :key="meetup._id"
              @click="onLoadMeetup(meetup._id)"
            >
              <v-sheet
                height="100%"
                tile
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <img width="100%" height="100%" :src="meetup.imageURL" :alt="meetup.imageURL">
                </v-row>
              </v-sheet>
            </v-carousel-item>
      </v-carousel>
      </v-layout>
      <v-layout>
        <v-flex class="d-flex justify-center ma-3 flex-wrap" xs12>
          <v-btn large class="red mx-5">
            EXPLORE MEETUPS
          </v-btn>
          <v-btn large class="green mx-5">
            ORGANIZE MEETUPS
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'; 

export default {
  name: "Home",

  mounted() {
    this.fetchMeetups();
  },

  computed: {
    ...mapGetters(['meetups', 'isSpinnerLoading']),
  },

  methods: {
    ...mapActions(['fetchMeetups']),
    onLoadMeetup(id) {
      this.$router.push('meetups/'+id);
    }
  }
};
</script>
<style>

.title {
  margin: 0 auto;
  text-align: center;
  color: black;
  background: rgba(36, 33, 33, 0.199);
}
.block-1 {
  background: goldenrod;
}
.block-2 {
  background: seagreen;
}
</style>