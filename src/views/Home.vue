<template>
<!-- TODO THE SIZE OF THE WINDOW IS: {{ x }} -->
  <b-container class="bv-example-row">
    <b-row>
        <b-col>
            <b-carousel ref="myCarousel" :interval="2500" controls indicators fade="carousel">
                <b-carousel-slide img-src="./src/assets/piano1.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="./src/assets/piano2.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="./src/assets/piano3.jpg"></b-carousel-slide>
            </b-carousel>
        </b-col>
    </b-row>
  </b-container>
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

<style scoped>
h1 {
    font-size: 2em;
    color: #19c78d;
}

.img {
    width: 50%
}
</style>
