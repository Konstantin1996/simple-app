<template>
  <v-container fluid>
    <v-flex class="mx-auto" lg8 xs12 >
      <v-layout row class="brown ma-0 pa-0">
        <v-carousel dark>
          <v-carousel-item v-for="(meetup, i) in meetups" :key="i" :src="meetup.src">
            <div class="title">
              <p>{{meetup.title}}</p>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-layout>
      <v-layout >
        <v-flex class="d-flex justify-center ma-2" xs12>
          <v-btn large class="red mx-5">EXPLORE MEETUPS</v-btn>
          <v-btn large class="green mx-5">ORGANIZE MEETUPS</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      meetups: [
        {
          src:
            "https://wp.zillowstatic.com/streeteasy/2/shutterstock_695847865-bcd2e5.jpg",
          id: "someid",
          title: "Meetup NY"
        },
        {
          src:
            "http://services.travelsavers.com/AMGService.svc/REST/GetImage?ImageID=4688592b-22a3-e911-be17-782bcb66a2f2&Width=450",
          id: "someid",
          title: "Meetup California"
        },
        {
          src: "https://www.akdmc.com/media/2822/russia.jpg",
          id: "someid",
          title: "Meetup Russia"
        }
      ]
    };
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