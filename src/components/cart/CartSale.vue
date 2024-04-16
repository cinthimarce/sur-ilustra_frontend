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
        <v-row align="center" justify="center" >
            <v-col cols="auto">
                <v-card-title class="subtext-caudex">
                    Detalle de compra
                </v-card-title>
            </v-col>
            
            <v-divider color="info"></v-divider>  

        </v-row >
        <v-row>
            <v-col cols="auto">
                <v-card-title class="subtext-caudex">
                    Resumen de compra :
                </v-card-title>
            </v-col>  
        </v-row>
        <template v-for="item in products" :key="item.id" >
            <v-row align="center" justify="center" >
                <v-col cols="8" md="2"  >
                    <v-avatar color="primary" class="text-qty over" size="25" 
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
                <v-col cols="4" pa="6" md="3">   
                    <v-card
                    :title="item.nombre" 
                    elevation="0"
                    class="text-table-head"
                    >
                    </v-card>
                </v-col>
                <v-col cols="12" pa="6" md="3">   
                    <v-card
                    elevation="0">
                        <v-card-text class="text-table">
                            Enmarcado: {{ displayWithMarco(item.withFrame )}}
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" pa="6" md="2">   
                    <v-card
                    elevation="0">
                        <v-card-text class="text-table">
                            {{ formatCurrency(item.total) }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-divider color="info"></v-divider>
        </template>
        <v-row  justify="center" >
 
                <v-col cols="12" pa="6" md="2">   
                    <v-card
                    elevation="0">
                        <v-card-text class="text-table">
                            Total:
                        </v-card-text>
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
.text-table {
    color: #8AA49B !important;
    font-family: 'Hepta Slab', serif !important;
    font-size: 1rem;
}

.text-table-head {
    color: #315467 !important;
    font-family: 'Hepta Slab', serif !important;
    font-size: 0.8rem;
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