<script setup>
import { useRouter } from 'vue-router';

import { onMounted } from 'vue';

const route = useRouter()
function handleImageError(event) {
            console.error('Error cargando la imagen:', event.target.src);
        }


// Lifecycle hooks
onMounted(() => {
    setTimeout(()=>{
        route.push({name: 'home'})
    }, 5000)
})

</script>

<template>
    <div class="aprobada">
        <v-container>
            <div class="d-flex justify-center align-center flex-column mt-8">
                <v-img :width="300"
                src="/img/logohv.jpeg" @error="handleImageError">
            </v-img>
            <h1>!Muchas gracias por tu compra!</h1>
            <p>tu compra ha sido procesada y se te informara la entrega</p>
            </div>
        </v-container>
    </div>
</template>

<style scoped>
.aprobada {
    width: 100%;
    height: 100vh;
    background-color: #ead3b6;
}
</style>