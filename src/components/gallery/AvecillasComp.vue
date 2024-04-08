<script setup>
import BaseGalery from './base/BaseGalery.vue';
import { useGaleryStore } from '@/stores/galery.js'
import BreadcrumbsComp from './base/BreadcrumbsComp.vue';
import { useRouter } from 'vue-router';
// Reactive Values
const galeriaStore = useGaleryStore()
const avecillas = galeriaStore.avecillasState;
const route = useRouter()
const rutas = [
    {
        title: 'Inicio',
        disabled: false,
        to: '/'
    },
    {
        title: 'Ilustraciones',
        disabled: true
    }
]
const redirectIlustrations = (nombre) => {
    route.push({
        name:'avecillasDetails',
        params: { nombre },
        // query: { id }
    })
}

</script>

<template>
    <v-container>
        <BreadcrumbsComp :rutas="rutas"/>
        <BaseGalery :productos="avecillas" @redirect-to="redirectIlustrations"/>
    </v-container>
</template>

<style scoped>
    
</style>