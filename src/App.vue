<template>
  <div id="app">
    <nav-bar :isDarkMode="isDarkMode" @toggle-theme="toggleTheme"/>
    <router-view />
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  data() {
    return {
      message: "",
      isDarkMode: false
    };
  },
  components: { NavBar },
  methods: {
    toggleTheme() {
      const htmlElement = document.documentElement;
      const currentTheme = htmlElement.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      htmlElement.setAttribute("data-bs-theme", newTheme);
      this.isDarkMode = newTheme === "dark";
      console.log("isDarkMode", this.isDarkMode);
    },
    // mounted() {
    //   const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    //   this.isDarkMode = currentTheme === "dark";
    // }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

:root {
  --ptc: #031120;
  --sdc: #262b3b;

  /* LightMode NavBar */
  --navbar-lightMode: #fad2b1;
  --lightModeL: #fdb072;
  --lightModeR: #ffc291;
  --navbar-lightMode-gradient:  linear-gradient(
    to right,
    var(--lightModeL) 0%,
    var(--lightModeR) 100%
  );
    /* DarkMode NavBar */
  --navbar-darkMode: #191c1f;
  --darkModeL: #031120;
  --darkModeR: #262b3b;
  --navbar-darkMode-gradient: linear-gradient(
    to right,
    var(--darkModeL) 0%,
    var(--darkModeR) 100%
  );
}
#app {
  font-family: "outfit", sans-serif;
  text-align: center; 
}

h1 {
  font-size: 2em;
  color: #19c78d;
}

p {
  font-size: 1.5em;
  color: #555;
}

/* For debugging bootstrap grid */

/* [class*="col"] {
  border: 1px solid black;
} */
</style>
