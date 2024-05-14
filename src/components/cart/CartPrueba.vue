<!-- eslint-disable no-undef -->
<script setup>
import { ref, computed, onUpdated, onMounted, watch } from 'vue';
import CartTable from './CartTable.vue';
import CartTitle from './CartTitle.vue';
import CartSale from './CartSale.vue';
import { useCartStore } from '@/stores/cart';
import { initMercadoPagoCheckout } from '@/utils/MercadoPago.js';
import { createCheckoutButton } from '@/utils/CkeckoutButton.js';
import { MercadoPagoIdPost } from '@/utils/MercadoPagoId.js';


const window = ref(0);
const preferenceID = ref(null);
const cartStore = useCartStore();
const cartProducts = computed(() => cartStore.getCartList);
const buttonDisabled = ref(null);

// Propiedad computada para determinar si el botón debe estar deshabilitado

const buttonName = computed(() => {
    return window.value === 0 ? 'Pagar' : 'Volver'
});


const windowNext = async () => {
    window.value = 1
    if(preferenceID.value != null){
        await MercadoPagoIdPost(preferenceID.value, cartProducts.value)
    }else{
        preferenceID.value = await initMercadoPagoCheckout(cartProducts.value);
    }
    createCheckoutButton(preferenceID.value);
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
    cartProducts.value
    updateButtonState()
})
onMounted(() => {
    updateButtonState()
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
                    <v-card-actions class="justify-center align-center mt-5">
                        <v-btn class="color-bg-cart px-6 mb-4 ml-1" variant="text" color="septenary"
                            @click="windowPrev"> {{
                            buttonName }} 
                        </v-btn>
                    </v-card-actions>
                </v-col>
                <v-col md="4">
                    <div id="checkoutButton">
                        <div id="wallet_container"></div>
                    </div>
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