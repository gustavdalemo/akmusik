<template>
    <div id="app">
        <h1>{{ message }}</h1>
        <p>AKmusik under uppbyggnad...</p>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            message: 'Work in Progress'
        }
    }
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