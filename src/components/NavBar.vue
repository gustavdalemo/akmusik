<template>
    <nav class="navbar">
        <ul class="navbar-list">
            <li class="navbar-item">
                <a href="/">
                    <img src="@/assets/logo.svg" alt="Logo" class="navbar-logo">
                </a>
            </li>
            <li class="navbar-item"><a href="/about">Om mig</a></li>
            <li class="navbar-item"><a href="/info">Info/Priser</a></li>
            <li class="navbar-item"><a href="/contact">Kontakt</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.navbar {
    background-color: #333;
    padding: 1rem;
}

.navbar-list {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
}

.navbar-item a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
}

.navbar-item a:hover {
    background-color: #555;
}

.navbar-logo {
    width: 5rem;
    height: 5rem;
    background-color: white;
    border-radius: 20%;
}
</style>