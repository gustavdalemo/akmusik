<template>
    <div id="app">
        <nav-bar/>
        <router-view/>
        <h1>{{ message }}</h1>
        <p>AKmusik under uppbyggnad...</p>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'


export default {
    name: 'App',
    data() {
        return {
            message: 'Work in Progress'
        }
    },
    components: { NavBar }
}
</script>

<style>
    #app {
        text-align: center;
        padding: 50px;
    }

    h1 {
        font-size: 2em;
        color: #ff6347; /* Tomato color */
    }

    p {
        font-size: 1.5em;
        color: #555; /* Gray color */
    }

</style>