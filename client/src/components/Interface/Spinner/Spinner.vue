<template>
    <div class="wrapper">
        <pacman-loader :loading="isSpinnerLoading" color="#fbc531"></pacman-loader>
    </div>
</template>

<script>
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'
import { mapGetters } from 'vuex' 

export default {
    name: 'Spinner',

    components: {
        PacmanLoader
    },

    computed: {
        ...mapGetters(['isSpinnerLoading'])
    }
}
</script>

<style>
    .wrapper {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, 0);
    }

</style>