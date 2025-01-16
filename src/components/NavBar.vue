<template>
  <b-navbar :class="{'bg-dark': isDarkMode, 'bg-light': !isDarkMode}" toggleable="md" class="sticky-top custom-navbar" >
    <b-container fluid="sm">
      <b-row>
        <!-- Logo -->
        <b-col cols="2" class="text-start">
          <b-navbar-brand to="/">
            <img v-if="!isDarkMode" src="@/assets/logo.svg" alt="logo" id="logo"/>
            <img v-else src="@/assets/logo_dark_mode.svg" alt="logo" id="logo"/>
          </b-navbar-brand>
        </b-col>
        <!-- Nav-collapse -->
        <b-col cols="2" md="8" class="text-right">
          <b-navbar-toggle target="nav-collapse" is-nav></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ms-auto align-items-center">
              <b-nav-item to="/">Hem</b-nav-item>
              <b-nav-item to="/about">Om mig</b-nav-item>
              <b-nav-item to="/info">Info/Priser</b-nav-item>
              <b-nav-item to="/contact">Kontakt</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-col>
        <b-col cols="2" md="2" class="text-right">
            <toggle-theme-button :isDarkMode="isDarkMode" @toggle-theme="toggleTheme"></toggle-theme-button>
        </b-col>
      </b-row>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
import ToggleThemeButton from './ToggleThemeButton.vue';

export default {
  name: "NavBar",
  components: {
    'toggle-theme-button': ToggleThemeButton
  },
  props: {
    isDarkMode: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleTheme() {
      this.$emit('toggle-theme');
    }
  }
};
</script>

<!-- TODO FIX NavBar layout and fix OffCanvas-->

<style scoped>
#logo {
  width: 100%;
  max-width: 100px;
}

.custom-navbar.bg-dark {
  background-color: #191c1f !important;
  border-bottom: 1px solid gray;
}

.custom-navbar.bg-light {
  background-color: #fad2b1 !important;
}
</style>


