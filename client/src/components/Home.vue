<template>
  <v-container fluid>
    <v-flex class="mx-auto my-10" lg8 xs12>
      <v-layout row class="brown ma-0 pa-0">
        <v-carousel dark>
          <v-carousel-item v-for="(meetup, i) in meetups" :key="i" :src="meetup.src" @click="onLoadMeetup(meetup.id)">
            <div class="title">
              <p>{{ meetup.title }}</p>
            </div>
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
export default {
  name: "Home",

  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    }
  },

  methods: {
    onLoadMeetup(id) {
      this.$router.push('meetups/'+id);
    }
  }
};
</script>
<style>
h1 {
  text-align: center;
}

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