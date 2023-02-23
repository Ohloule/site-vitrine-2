<template>
  <div class="app">
    <loader-component class="loader"></loader-component>
    <barre-navigation id="barre-navigation"></barre-navigation>
    <div class="router-vue"><router-view /></div>
    <barre-footer></barre-footer>
  </div>
</template>

<script>
import barNav from "./components/barre-navigation/barre-navigation.vue";
import footBar from "./components/barre-footer/barre-footer.vue";
import loaderComponent from "./components/loader-component/loader-component.vue";

export default {
  name: "app",
  mounted() {
    const loader = document.querySelector(".loader");
    window.addEventListener("load", () => {
      loader.style.display = "none";
    });
  },
  components: {
    "barre-navigation": barNav,
    "barre-footer": footBar,
    "loader-component": loaderComponent,
  },
};
</script>

<style lang="scss">
@import "./_variables.scss";
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: "Noto Sans", sans-serif;
  font-size: $font-normal;
}

.app {
  position: relative;
  display: flex;
  flex-direction: column;
  //height: 100vh;
  background-color: $clair;
}
h2 {
  font-family: "Noto Serif", serif;
  font-weight: 800;
}
.router-vue {
  background-color: $clair;
}
</style>
