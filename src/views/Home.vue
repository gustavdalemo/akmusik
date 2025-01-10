<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col> 1 of 3 </b-col>
      <b-col> 2 of 3 </b-col>
      <b-col> 3 of 3 </b-col>
    </b-row>
  </b-container>
  THE SIZE OF THE WINDOW IS: {{ x }}
</template>

<script lang="ts">
export default {
  name: "Home",
  data() {
    return {
        x: ''
    }
},
mounted() {
    window.addEventListener('resize', this.updateSize);
    this.updateSize();
},
beforeDestroy() {
    window.removeEventListener('resize', this.updateSize);
},
methods: {
    updateSize() {
        const width = window.innerWidth;
        console.log('Viewport width:', width);
        if (window.innerWidth >= 1400) {
            this.x = 'xxl';
        } else if (window.innerWidth >= 1200) {
            this.x = 'xl';
        } else if (window.innerWidth >= 992) {
            this.x = 'lg';
        } else if (window.innerWidth >= 768) {
            this.x = 'md';
        } else if (window.innerWidth >= 576) {
            this.x = 'sm';
        } else if (window.innerWidth < 576) {
            this.x = 'xs';
        } else {
            this.x = 'unknown';
        }
    }
}
};
</script>
