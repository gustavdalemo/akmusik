<template>
  <b-navbar toggleable="lg" class="sticky-top">
    <b-container fluid="sm">
      <b-row>
        <!-- Logo -->
        <b-col>
          <b-navbar-brand to="/">
            <img src="@/assets/logo.svg" alt="logo" id="logo"/>
          </b-navbar-brand>
        </b-col>
        <!-- Nav-collapse -->
        <b-col cols="2" md="4" class="text-right">
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
      </b-row>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#logo {
  width: 100%;
  max-width: 100px;
}
</style>
