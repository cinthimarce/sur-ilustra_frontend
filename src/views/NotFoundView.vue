<script setup>

import { } from 'vue'
// props

// Reactive Values

// Computed Properties

// Watchers

// Lifecycle hooks

</script>

<template>
    <div class="found">
        <div class="d-flex justify-center align-center flex-column mt-8">
            <v-img :width="600" src="/img/404.png" >
            </v-img>
            <h1 class="error-title">Error 404</h1>
            <h1>Página no Encontrada</h1>
            <router-link to="/"><v-btn size="x-large" elevation="2" color="#5865f2">Regresar</v-btn></router-link>
        </div>
    </div>
</template>

<style scoped>
.found {
    width: 100;
    height: 100vh;
    background-color: #CAE6F4;
}
.error-title{
    font-size: 4rem;
    color: #fcb050;
}
</style>