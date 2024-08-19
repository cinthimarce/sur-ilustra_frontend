<script setup>
    
import {} from 'vue'
    // props

    // Reactive Values

    // Computed Properties

    // Watchers

    // Lifecycle hooks

</script>

<template>
    <div class="denegada">
        <v-container>
            <div class="d-flex justify-center align-center flex-column mt-8">
                <v-img :width="300"
                src="/img/logohv.jpeg">
            </v-img>
            <h1>Su compra fue denegada por mercado pago</h1>
            <p>revise sus credenciales e intente volver a generar la compra</p>
            </div>
            <div class="button-inicio d-flex align-content-center justify-center mt-6">
            <v-btn size="x-large" elevation="2" color="#5865f2" to="/" prepend-icon="mdi:mdi-home">Home</v-btn>
            </div>
        </v-container>
    </div>
</template>

<style scoped>
.denegada {
    width: 100%;
    height: 100vh;
    background-color: #ead3b6;
}
</style>