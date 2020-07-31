<template>
    <div>
        <nav class="navbar bg-white border-bottom navbar-light">
            <router-link class="navbar-brand mr-auto" :to="{name: 'home'}">LaravelBnb</router-link>
            <!-- <router-link class="btn nav-button" :to="{name: 'second'}">Second</router-link> -->
        </nav>
        <router-view></router-view>
    </div>
</template>