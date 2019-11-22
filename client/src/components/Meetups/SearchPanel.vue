<template>
    <v-text-field @input="onInputText" hint="Search by title"></v-text-field>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "SearchPanel",


    methods: {
        ...mapActions(['filterMeetups']),

        onInputText(value) {
                this.filterMeetups(value)
        }
    }
}
</script>

<style>

</style>