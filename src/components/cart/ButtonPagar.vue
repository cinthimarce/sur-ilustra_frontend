<script setup>
    
import {defineProps,defineEmits} from 'vue'
// props
defineProps(['name','disabled'])

//emits
const emit = defineEmits(['changeWindow'])

//computed


function changeWindow(){
    emit('changeWindow')
}

</script>

<template>
    <v-card-actions class="justify-center">
        <v-btn class="color-bg-cart px-6 mb-4 ml-1" variant="text" color="septenary" @click="changeWindow" :disabled="disabled"> {{ name }} </v-btn>
    </v-card-actions>
</template>

<style scoped>
.color-bg-cart{
    background-color: #e3f26d;
}
</style>