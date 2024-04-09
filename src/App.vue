<script setup>
import { useGaleryStore } from './stores/galery.js'
import { onMounted } from 'vue'

const galeryStore = useGaleryStore()
// console.log(galeryStore.ilustrationes)
onMounted(() =>{
  galeryStore.getIlustrations()
  galeryStore.getIAvecillas()
})
</script>


<template>
  <v-app id="app">
      <router-view/>
  </v-app>
</template>

<style>
#app {
  font-family: "Roboto", "Homemade Apple", Arial, Helvetica, sans-serif;
}
</style>

