<template>
  <v-app>
    <div>
      <v-navigation-drawer v-model="sideNav" fixed>
        <v-list-item-group color="primary">
          <v-list-item v-for="item in menuItems" :key="item.title" router :to="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-navigation-drawer>

      <v-toolbar class="menu">
        <v-app-bar-nav-icon class="d-sm-none" @click="onClick"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            DevMeetUp
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-for="item in menuItems" :key="item.title">
          <v-btn class="d-none d-sm-flex d-md-flex d-lg-flex" router :to="item.link" text>
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    sideNav: false,
    menuItems: [
      { icon: "mdi-human", title: "View meetups", link: "/meetups" },
      {
        icon: "mdi-contacts",
        title: "Organize meetup",
        link: "/meetups/create"
      },
      { icon: "mdi-face", title: "Profile", link: "/profile" },
      { icon: "mdi-arrow-right-box", title: "Sign up", link: "/signup" },
      { icon: "mdi-arrow-left-box", title: "Sign in", link: "/signin" }
    ]
  }),

  methods: {
    onClick() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
  .menu {
    background: linear-gradient(120deg, rgba(0,152,132,1) 0%, rgba(222,64,17,0.6533963927367823) 35%, rgba(233,148,178,1) 73%) !important;
  }
</style>