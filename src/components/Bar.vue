<template>
  <div>
    <div>bar</div>
    <div>
      <!-- <p v-if="id">{{id}}</p> -->
      <p>{{$route.params.id}}</p>
      <p>hellobar</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bar",
  props: {
    id: Number || undefined
  }
};
</script>

<style>
</style>