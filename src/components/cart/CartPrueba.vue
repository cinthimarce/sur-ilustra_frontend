<script setup>
import { ref, computed, onUpdated, onMounted, watch } from 'vue'
import CartTable from './CartTable.vue';
import CartTitle from './CartTitle.vue';
//import ButtonPagar from './ButtonPagar.vue'
import CartSale from './CartSale.vue'
//import mercadoPago from './mercadoPago.vue';
import { useCartStore } from '@/stores/cart';
import { initMercadoPagoCheckout } from '@/utils/MercadoPago.js'


//const length = ref(3)
const window = ref(0)
const cartStore = useCartStore()
const cartProducts = computed(() => cartStore.getCartList
)
const buttonDisabled = ref()
// Propiedad computada para determinar si el botón debe estar deshabilitado

const buttonName = computed(() => {
    return window.value === 0 ? 'Pagar' : 'Volver'
})


const windowNext = () => {
    window.value = 1

}
const windowPrev = () => {
    window.value = 0

}


const updateButtonState = () => {
    if (cartProducts.value.length === 0) {
        buttonDisabled.value = true
    } else {
        buttonDisabled.value = false
    }
}
watch(cartProducts, (newValue) => {
    if (newValue.length === 0) {
        buttonDisabled.value = true
    }
}, { deep: true })
onUpdated(() => {
    // const cartStore = useCartStore()
    // cartProducts.value = cartStore.getCartList
    cartProducts.value
    console.log(cartProducts.value);
    updateButtonState()
    console.log(buttonDisabled.value)

})
onMounted(() => {
    updateButtonState()
    console.log(cartProducts.value);
    console.log(buttonDisabled.value);
    initMercadoPagoCheckout(cartProducts.value)
    // const orderPrice = cartProducts.value.map(product => ({
    //     title: product.nombre,
    //     quantity: product.quantity,
    //     price: product.price
    // }))
    // console.log(orderPrice)
})
</script>

<template>
    <v-window v-model="window">
        <v-window-item>
            <cart-title />
            <cart-table />
            <v-card-actions class="justify-center">
                <v-btn class="color-bg-cart px-6 mb-4 ml-1" variant="text" color="septenary" @click="windowNext"
                    :disabled="buttonDisabled"> {{ buttonName }} </v-btn>
            </v-card-actions>

        </v-window-item>
        <v-window-item>
            <cart-sale :products="cartProducts" />
            <v-row d-flex justify-center align-center direction="col">
                <v-col md="4">
                    <v-card-actions class="justify-center">
                        <v-btn class="color-bg-cart px-6 mb-4 ml-1" variant="text" color="septenary"
                            @click="windowPrev"> {{
                            buttonName }}
                        </v-btn>
                    </v-card-actions>
                </v-col>
                <v-col md="4">
                    <v-card-actions class="justify-center">
                        <v-btn class="color-bg-cart px-6 mb-4 ml-1" variant="text" color="septenary" id="checkout-btn"> Pagar </v-btn>
                    </v-card-actions>
                </v-col>
                <v-col md="4">
                    <div id="wallet_container"></div>
                </v-col>
            </v-row>
        </v-window-item>
    </v-window>
</template>

<style scoped>
.color-bg-cart {
    background-color: #e3f26d;
}
</style>