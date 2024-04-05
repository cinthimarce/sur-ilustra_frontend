<script setup>
import CartTitle from './CartTitle.vue';
import CartTable from './CartTable.vue';
import {onUpdated} from 'vue'
import { useCartStore} from '@/stores/cart.js'


onUpdated(() => {
    const cartStore = useCartStore()
    const cart = cartStore.getCartList
    console.log(cart);
})
</script>

<template>
     <v-container>
        <v-row justify-center>
            <v-col align-center>
                <CartTitle/>
                <CartTable/>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    
</style>