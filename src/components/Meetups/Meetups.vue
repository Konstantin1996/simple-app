<template>
  <v-container>
    <v-layout>
      <v-flex class="mx-auto" xs12>
        <v-card class="d-flex mt-3 purple grey lighten-3">
          <v-flex xs4 sm5 lg3>
          <v-img
            height="200px"
            cover
            src="https://wp.zillowstatic.com/streeteasy/2/shutterstock_695847865-bcd2e5.jpg"
          ></v-img>
          </v-flex>
          <v-flex class="d-flex flex-column " xs8 sm7 lg9>
            <v-card-title>Title</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim nobis error veniam. Atque vitae provident dicta officiis, quidem in.</v-card-text>
            <v-card-actions class="align-self-end mt-auto">
              <v-btn>Show details</v-btn>
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

  data() {
    return {};
  }
};
</script>

<style>
</style>