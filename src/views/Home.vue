<template>
  <!-- THE SIZE OF THE WINDOW IS: {{ x }} -->
  <b-container class="bv-example-row">
    <b-row>
      <b-col cols="3">
      </b-col>
      <b-col cols="6">
        <h1>Välkommen</h1>
        <b-carousel
          ref="myCarousel"
          :interval="5000"
          indicators
          ride="carousel"
        >
          <b-carousel-slide :img-src="img1"></b-carousel-slide>
          <b-carousel-slide :img-src="img2"></b-carousel-slide>
          <b-carousel-slide :img-src="img3"></b-carousel-slide>
        </b-carousel>
      </b-col>
      <b-col cols="3">
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import img1 from "@/assets/piano1.jpg";
import img2 from "@/assets/piano2.jpg";
import img3 from "@/assets/piano3.jpg";

export default {
  name: "Home",
  data() {
    return {
      x: "",
      interval: 1000,
      img1,
      img2,
      img3,
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateSize);
    this.updateSize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateSize);
  },
  methods: {
    updateSize() {
      const width = window.innerWidth;
      console.log("Viewport width:", width);
      if (window.innerWidth >= 1400) {
        this.x = "xxl";
      } else if (window.innerWidth >= 1200) {
        this.x = "xl";
      } else if (window.innerWidth >= 992) {
        this.x = "lg";
      } else if (window.innerWidth >= 768) {
        this.x = "md";
      } else if (window.innerWidth >= 576) {
        this.x = "sm";
      } else if (window.innerWidth < 576) {
        this.x = "xs";
      } else {
        this.x = "unknown";
      }
    },
  },
};
</script>

<style scoped>

.img {
  width: 50%;
}
</style>
