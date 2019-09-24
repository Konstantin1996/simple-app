<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <v-card-title>
            title
          </v-card-title>
          <v-img
            height="400px"
            cover
            src="https://wp.zillowstatic.com/streeteasy/2/shutterstock_695847865-bcd2e5.jpg"
          ></v-img>
          <v-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum in adipisci nesciunt temporibus at optio dolor possimus ipsum, officia amet!</v-card-text>
          <v-card-actions>
            <v-btn>Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn to="/meetups">Back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>