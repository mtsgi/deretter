<template>
  <div id="app">
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: { TheHeader },
  data() {
    return {
      configApiUrl: "https://deretter.microcms.io/api/v1/config",
      apiKey: "f56237c7-77d5-4e1d-932a-d19eb2b58496"
    };
  },
  async mounted() {
    // Fetch app config
    await fetch(this.configApiUrl, {
      method: "GET",
      mode: "cors",
      headers: {
        "X-API-KEY": this.apiKey
      }
    })
      .then(res => res.json())
      .then(data => {
        this.$root.config = data;
        console.warn(data);
      })
      .catch(error => {
        console.error("通信に失敗しました", error);
      });
    // Fetch timeline data
    await fetch(this.timelineApiUrl, {
      method: "GET",
      mode: "cors"
    })
      .then(res => res.json())
      .then(data => {
        this.$root.statuses = data;
        console.warn(data);
      })
      .catch(error => {
        console.error("通信に失敗しました", error);
      });
  },
  computed: {
    timelineApiUrl() {
      return `${this.$root.config.api_base}derepo/statuses?maxResults=100`;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
