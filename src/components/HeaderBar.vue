<template>
    <div class="menu-links">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add a new place</router-link>
    </div>
</template>

<style>
    .menu-links {
        background: #111;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menu-links a {
        display: inline-block;
        text-decoration: none;
        color: #fff;
        margin-right: 30px;
    }
</style>
