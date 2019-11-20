<template>
  <v-container fluid>
    <v-flex class="mx-auto my-10" lg8 xs12>
      <v-layout>
          <v-carousel 
            :interval="3000" 
            show-arrows 
            hide-delimiters 
            cycle
            light
            prev-icon="mdi-arrow-left" 
            next-icon="mdi-arrow-right"
          >
            <v-carousel-item
              v-for="meetup in meetups"
              :key="meetup._id"
              @click="onLoadMeetup(meetup._id)"
            >
              <v-sheet
                class="carousel"
                height="100%"
                width="100$"
                tile
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <img height="100%" :src="meetup.imageURL" :alt="meetup.imageURL">
                </v-row>
              </v-sheet>
            </v-carousel-item>
      </v-carousel>
      </v-layout>
      <v-layout>
        <v-flex class="d-flex justify-center ma-3 flex-wrap" xs12>
          <v-btn class="mx-5" to="/meetups">
            EXPLORE MEETUPS
          </v-btn>
          <v-btn class="mx-5" to="/meetups/create">
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
<style lang="scss">

.carousel {
  background: transparent !important;
}

.mdi-arrow-left {
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 7px;
    border: 5px solid;
    width: 15px !important;
    height: 15px !important;
    border-color: 
    black
    black
    transparent
    transparent;
    transform: rotate(-135deg);
  }
}

.mdi-arrow-right {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    right: 7px;
    border: 5px solid;
    width: 15px !important;
    height: 15px !important;
    border-color: 
    black
    black
    transparent
    transparent;
    transform: rotate(45deg);
  }
}

</style>