<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Route matching</h1>
    <div class="links">
      <router-link to="/">Go to Main</router-link>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link :to="{name: 'BarWithId',params: {id}}">Go to Bar with Id</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Bar from "./components/Bar";
export default {
  name: "app",
  components: {},
  data() {
    return {
      id: 1234
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,
body {
  height: 100%;
}
.links {
  display: flex;
  justify-content: center;
}

.links > a {
  /* display: inline-block; */
  margin: auto;
}
</style>
