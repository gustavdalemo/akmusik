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
  --ptc: #ff8aef; /* Primary text color */
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
d