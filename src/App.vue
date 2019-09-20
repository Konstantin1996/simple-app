<template>
  <v-app>
    <div>
      <v-navigation-drawer fixed v-model="sideNav">
        <v-list-item-group color="primary">
          <v-list-item :key="item.title" v-for="item in menuItems">
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-navigation-drawer>

      <v-toolbar class="teal lighten-3">
        <v-app-bar-nav-icon class="d-sm-none" @click="onClick"></v-app-bar-nav-icon>
        <v-toolbar-title>DevMeetUp</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items :key="item.title" v-for="item in menuItems">
          <v-btn class="d-none d-sm-flex d-md-flex d-lg-flex" text>
            <v-icon>{{item.icon}}</v-icon>
            {{item.title}}
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
      { icon: "mdi-human", title: "View meetups" },
      { icon: "mdi-contacts", title: "Organize meetup" },
      { icon: "mdi-face", title: "Profile" },
      { icon: "mdi-arrow-right-box", title: "Sign up" },
      { icon: "mdi-arrow-left-box", title: "Sign in" }
    ]
  }),

  methods: {
    onClick() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>
