<script setup>
import { formatCurrency } from '../base/FormatCurrent';
import { defineProps } from 'vue'
    // props
defineProps({
    products: Object
})
const displayWithMarco = (withFrame) => {
    return withFrame ? "Si" : "No";
};
</script>

<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="auto">
                <v-card v-for="item in products" :key="item.id"
                class="mx-auto"
                max-width="800"
                :prepend-avatar="item.imagen"
                :title="item.nombre">
                    <v-card-text>
                        Cantidad: {{ item.quantity }}
                    </v-card-text>
                    <v-card-text>
                        Enmarcado: {{ displayWithMarco(item.withFrame )}}
                    </v-card-text>
                    <v-card-text>
                        SubTotal: {{ formatCurrency(item.total) }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    
</style>