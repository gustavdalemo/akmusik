<template>
  <b-button @click="$emit('toggle-theme')" variant="" class="border-0">
      <i v-if="isDarkMode" key="moon" class="bi bi-moon text-muted"></i>
      <i v-else key="sun" class="bi bi-sun text-muted"></i>
  </b-button>
</template>

<script lang="ts">
export default {
  name: "ToggleThemeButton",
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
