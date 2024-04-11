<script setup>
import { ref, computed,onUpdated } from 'vue'
import CartTable from './CartTable.vue';
import CartTitle from './CartTitle.vue';
import ButtonPagar from './ButtonPagar.vue'
import CartSale from './CartSale.vue'
import { useCartStore } from '@/stores/cart';


//const length = ref(3)
const window = ref(0)
const cartProducts = ref({})
const buttonName = computed(() => {
    return window.value === 0 ? 'Pagar' : 'Volver'
})

const windowNext = () => {
    window.value = 1
}
const windowPrev = () => {
    window.value = 0
}
onUpdated(() =>{
    const cartStore = useCartStore()
    cartProducts.value = cartStore.getCartList
    console.log(cartProducts.value);
})
</script>

<template>
    <v-window v-model="window">
        <v-window-item>
            <cart-title />
            <cart-table />
            <button-pagar :name="buttonName" @change-window="windowNext" />
        </v-window-item>
        <v-window-item>
            <cart-sale :products="cartProducts"/>
            <button-pagar :name="buttonName" @change-window="windowPrev" />
        </v-window-item>
    </v-window>
</template>

<style scoped></style>