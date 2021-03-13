<template>
  <div>
    <v-app-bar fixed color="#93CEF1" hide-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>deretter</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav>
        <router-link
          v-for="([path, icon, text], i) in links"
          :key="i"
          :to="path"
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        ["/", "mdi-home-outline", "ホーム"],
        ["/about", "mdi-information-outline", "情報"],
        ["/settings", "mdi-cog-outline", "設定"]
      ],
      drawer: false
    };
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
