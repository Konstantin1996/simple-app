<template>
  <v-container class="createMeet">
    <v-layout row>
      <v-flex my-5 class="text-center">
        <h2>Create meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row ma-0>
            <v-flex mx-auto xs10 sm7 lg5>
              <v-text-field
                id="title"
                v-model="title"
                name="title"
                label="Title"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row ma-0>
            <v-flex mx-auto xs10 sm7 lg5>
              <v-text-field
                id="location"
                v-model="location"
                name="location"
                label="Location"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row ma-0>
            <v-flex mx-auto xs10 sm7 lg5>
              <v-text-field
                id="imageURL"
                v-model="imageURL"
                name="imageURL"
                label="URL"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout v-if="imageURL" row ma-0>
            <v-flex mx-auto xs10 sm7 lg5>
              <v-img contain :src="imageURL" alt="image" />
            </v-flex>
          </v-layout>
          <v-layout row ma-0>
            <v-flex mx-auto xs10 sm7 lg5>
              <v-textarea
                id="description"
                v-model="desc"
                rows="10"
                name="description"
                label="Description"
              ></v-textarea>
            </v-flex>
          </v-layout>


          <v-layout row ma-0>
            <v-flex class="text-center">
              <v-date-picker></v-date-picker>
            </v-flex>
          </v-layout>
          <v-layout row ma-0 my-5>
            <v-flex class="text-center"></v-flex>
          </v-layout>

          <v-layout row ma-0>
            <v-flex xs12 class="text-center">
              <v-btn type="submit" :disabled="!formIsValid">
                Create meetup
              </v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      location: "",
      imageURL: "",
      desc: ""
    };
  },

  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageURL !== "" &&
        this.desc !== ""
      );
    }
  },

  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) {
        return;
      }
      const meetup = {
        id: "random",
        title: this.title,
        location: this.location,
        imageURL: this.imageURL,
        desc: this.desc,
        date: new Date()
      };

      this.$store.dispatch("createMeetup", meetup);
      this.$router.push("/meetups");
    }
  }
};
</script>

<style>
.picker {
  height: 300px;
}

.createMeet {
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(
      to top,
      rgba(68, 66, 66, 0.507),
      rgba(0, 0, 0, 0)
    )
    1 100%;
}
</style>