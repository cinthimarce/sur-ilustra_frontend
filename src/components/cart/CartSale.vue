<script setup>
import { formatCurrency } from '../base/FormatCurrent';
import { useCartStore } from "@/stores/cart";
import { computed } from 'vue'
import { defineProps } from 'vue'
    // props
defineProps({
    products: Object
})
const displayWithMarco = (withFrame) => {
    return withFrame ? "Si" : "No";
};
const cartStore = useCartStore()
const listStore = computed(() => cartStore.getCartList)
</script>

<template>
    <v-container>
        <v-row align="center" justify="center" >
            <v-col cols="auto">
                <v-card-title class="subtext-caudex">
                    Detalle de compra
                </v-card-title>
            </v-col>
            <v-divider color="info"></v-divider>  
        </v-row >
        <!--<v-row>
            <v-col cols="auto">
                <v-card-title class="subtext-caudex">
                    Resumen de compra :
                </v-card-title>
            </v-col>  
        </v-row> -->
        <template v-for="item in products" :key="item.id" >
            <v-row align="center" justify="center" >
                <v-col cols="8" md="2" class="pb-9" >
                    <v-avatar color="primary" class="text-qty over" size="28" 
                    >
                    {{ item.quantity }}
                    </v-avatar>
                    <v-card
                    class="my-2 pb-6"
                    border="opacity-30 sm"
                    elevation="0"
                    :prepend-avatar="item.imagen"
                    width="68"
                    height="66"
                    > 
                    </v-card>
                </v-col>
                <v-col cols="4" md="3" >   
                    <v-card
                    elevation="0"
                    >
                        <v-card-text class="text-table-blue pb-1 pt-10 ">
                            {{ item.nombre}} 
                        </v-card-text>
                        <v-card-text class="pt-1 pb-10 text-table-green">
                        Ilustración 21x29cm
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="3">
                    <v-card 
                    elevation="0">
                        <v-card-text class="text-table-green">
                            Enmarcado: {{ displayWithMarco(item.withFrame)}}
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" pa="6" md="2">   
                    <v-card
                    elevation="0">
                        <v-card-text class="text-table-blue ">
                            {{ formatCurrency(item.total) }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-divider color="info"></v-divider>
        </template>
        <v-row>
                <v-col cols="12" pa="6"  v-for="(index) in listStore" :key="index"
                class="d-flex justify-end"
                >   
                    <v-card
                    title="Total:" 
                    elevation="0"
                    class="text-table-blue">
                    {{ formatCurrency(cartStore.cartTotalPrice) }}
                    </v-card>
                </v-col>
            </v-row>
    </v-container>
</template>

<style scoped>
.subtext-caudex {
    color: #315467 !important;
    font-family: 'Caudex', serif !important;
    font-size: 1.6rem;
}
.text-table-green {
    color: #8AA49B !important;
    font-family: 'Hepta Slab', serif !important;
    font-size: 1.1rem;
}
.text-table-blue {
    color: #315467 !important;
    font-family: 'Hepta Slab', serif !important;
    font-size: 1.1rem;
}
.text-qty{
    color: #315467 !important;
    font-family: 'Hepta Slab', serif !important;
    font-size: 0.9rem;
}
.over{
    top:20px;
    left: 50px;
    z-index:2;
}

</style>