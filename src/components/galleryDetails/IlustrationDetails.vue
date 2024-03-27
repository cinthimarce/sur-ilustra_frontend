<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const nameIlustracion = route.params.nombre;
const idIlustration = route.query.id;
</script>

<template>
    <h1>{{nameIlustracion}}</h1>
    <h3>{{ idIlustration }}</h3>
</template>

<style scoped>
    
</style>