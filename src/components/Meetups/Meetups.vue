<template>
  <v-container>
    <v-layout >
      <v-flex class="mx-auto" xs12 lg8>
        <v-card class="d-flex mt-3 purple grey lighten-3">
          <v-img
            height="200px"
            width="200px"
            cover
            src="https://dlqxt4mfnxo6k.cloudfront.net/dsldhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8wYmIyMGE2ODdkMjgzZmY5OTg3YTg5NWQ5MmVlMDIyZS5qcGVn/exact/2000/1125"
          ></v-img>
          <div class="d-flex flex-column">
            <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim nobis error veniam. Atque vitae provident dicta officiis, quidem in.</v-card-text>
            <v-card-actions class="align-self-end mx-10">
              <v-btn>Show details</v-btn>
            </v-card-actions>
          </div>
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