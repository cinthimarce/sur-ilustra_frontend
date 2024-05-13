<script setup>
    
import {onMounted} from 'vue'
import MainLayout from '@/layouts/MainLayout.vue';
    // props

    // Reactive Values

    // Computed Properties

    // Watchers

    // Lifecycle hooks
    onMounted(() =>{
        setTimeout(() => {
            
        }, 3000);
    })

</script>

<template>
    <MainLayout>
        <template #main>
            <h1>muchas gracias por comprar con nosotros!!</h1>
        </template>
    </MainLayout>
</template>

<style scoped>
    
</style>