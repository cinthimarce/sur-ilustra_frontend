<script setup>
    
import {defineProps,defineEmits} from 'vue'
    // props
defineProps(['name'])
const emit = defineEmits(['changeWindow'])
function changeWindow(){
    emit('changeWindow')
}
    // Reactive Values

    // Computed Properties

    // Watchers

    // Lifecycle hooks

</script>

<template>
    <v-card-actions class="justify-center">
        <v-btn class="color-bg-cart px-6 mb-4 ml-1" variant="text" color="septenary" @click="changeWindow"> {{ name }} </v-btn>
    </v-card-actions>
</template>

<style scoped>
.color-bg-cart{
    background-color: #e3f26d;
}
</style>