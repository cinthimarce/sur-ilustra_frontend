<script setup>
import CarouselHome from './CarouselHome.vue'
import {ref, onBeforeMount} from 'vue'
import { useGaleryStore } from '@/stores/galery.js'
import { useRouter } from 'vue-router';
//reactive values
const avecillas = ref({}) 
const ilustraciones = ref({}) 
const route = useRouter();

const redirectAvecilla = (nombre) => {
    route.push({
        name:'avecillasDetails',
        params: { nombre },
        // query: { id }
    })
}
const redirectIlustracion = (nombre) => {
    route.push({
        name:'ilustrationsDetails',
        params: { nombre },
        // query: { id }
    })
}
const redirectAbout = () => {
    route.push({
        name: 'about',
    })
}

    // Lifecycle hooks
onBeforeMount(() => {
    const galeryStore = useGaleryStore()
    avecillas.value = galeryStore.avecillasState
    ilustraciones.value = galeryStore.ilustratiosState
    console.log(avecillas.value)
    console.log(ilustraciones.value)
})
</script>

<template>
    <CarouselHome :avecilla="avecillas" :ilustracion="ilustraciones" @redirectAvecilla="redirectAvecilla" @redirectIlustracion="redirectIlustracion" @redirectSobre="redirectAbout"/>
</template>

<style scoped>
    
</style>