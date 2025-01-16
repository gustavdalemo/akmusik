<template>
  <b-navbar :class="{'bg-dark': isDarkMode, 'bg-light': !isDarkMode}" toggleable="lg" class="sticky-top custom-navbar" >
    <b-container fluid="sm">
      <b-row>
        <!-- Logo -->
        <b-col cols="4" class="text-start">
          <b-navbar-brand to="/">
            <img v-if="!isDarkMode" src="@/assets/logo.svg" alt="logo" id="logo"/>
            <img v-else src="@/assets/logo_dark_mode.svg" alt="logo" id="logo"/>
          </b-navbar-brand>
        </b-col>
        <b-col cols="8" class="d-none d-lg-flex align-items-center justify-content-end">
          <b-navbar-nav class="ms-auto align-items-center">
            <b-nav-item to="/" class="nav-item-large me-3">Hem</b-nav-item>
            <b-nav-item to="/about" class="nav-item-large me-3">Om mig</b-nav-item>
            <b-nav-item to="/info" class="nav-item-large me-3">Info/Priser</b-nav-item>
            <b-nav-item to="/contact" class="nav-item-large me-3">Kontakt</b-nav-item>
            <toggle-theme-button :isDarkMode="isDarkMode" @toggle-theme="toggleTheme"></toggle-theme-button>
          </b-navbar-nav>
        </b-col>
        <!-- Nav-offcanvas -->
        <b-col cols="8" class="d-lg-none text-end">
          <b-navbar-toggle target="nav-offcanvas" is-nav></b-navbar-toggle>
          <b-offcanvas id="nav-offcanvas" title="OffCanvas" placement="end" is-nav auto-close="inside">
            <b-navbar-nav class="ms-auto align-items-left">
              <b-nav-item to="/">Hem</b-nav-item>
              <b-nav-item to="/about">Om mig</b-nav-item>
              <b-nav-item to="/info">Info/Priser</b-nav-item>
              <b-nav-item to="/contact">Kontakt</b-nav-item>
            </b-navbar-nav>
            <toggle-theme-button :isDarkMode="isDarkMode" @toggle-theme="toggleTheme"></toggle-theme-button>
          </b-offcanvas>
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
  background: var(--navbar-darkMode-gradient) !important;
  border-bottom: 1px solid gray;
}

.custom-navbar.bg-light {
  background: var(--navbar-lightMode-gradient) !important;
}

.nav-item-large {
  font-size: 1.1rem;
}


</style>


