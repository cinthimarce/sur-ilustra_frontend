<template>
    <v-row align="center" justify="center">
        <template  v-for="producto in productos" :key="producto.id"  >
            <v-col cols="12" md="3" >
                <v-hover v-slot="{ isHovering, props }" >
                    <v-card class="border" elevation="0" rounded="0" :class="{ 'on-hover': isHovering }" v-bind="props"
                        >
                        <v-img :src="producto.imagen1" :aspect-ratio="4 / 3"  @click="redirectTo(producto.title,producto.id)">
                            <div class="align-self-center" variant="flat">
                                <v-card-title class="font text-h6 text-transparent d-flex flex-column align-center"
                                    :class="{ 'show-btns': isHovering }" :color="transparent">
                                </v-card-title>
                            </div>
                            <v-expand-transition>
                                <v-btn v-if="isHovering"
                                    class="d-flex transition-fast-in-fast-out color-primary v-card--reveal text-h9 transparent"
                                    :class="{ isHovering }" style="height: 100%">
                                    <v-card-text class="text-overline font-details">{{ producto.nombre }}</v-card-text>
                                </v-btn>
                            </v-expand-transition>
                            <template v-slot:placeholder>
                                <v-row
                                    align="center"
                                    class="fill-height ma-4"
                                    justify="center"
                                >
                                    <v-progress-circular
                                    color="grey-lighten-5"
                                    indeterminate
                                    ></v-progress-circular>
                                </v-row>
                                </template>
                        </v-img>
                    </v-card>
                </v-hover>
            </v-col>
        </template>
    </v-row>
</template>

<script setup>
import { defineProps,defineEmits } from 'vue'
//import { formatCurrency } from "./FormatCurrent.js"
// import { useRouter } from 'vue-router';


// const route = useRouter()
const transparent = "rgba(255, 255, 255, 0)";

defineProps({
    productos: Array,
})

const emit = defineEmits(['redirectTo'])


const redirectTo = (title,id) => {
  emit('redirectTo', title,id);
};

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;300&display=swap;wght@500");

.transparent {
    transition: opacity 0.3s ease-in-out;
}

.transparent:not(.on-hover) {
    opacity: 0.75;
}


.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
}

.show-btns {
    color: #315467 !important;
    
}

.color-primary {
    background-color: #e3f26d;
    color: #556560;
    font-family: "Raleway", sans-serif;

}

.text-septenary {
    color: #315467;
}

.text-grey {
    color: #1d1d1d;
}

.color-bg-cart {
    background-color: #e3f26d;
    color: #315467;
   
}

.subtext-card {
    font-size: 0.85rem;
}

.font{
    font-family: 'Hepta Slab', serif !important;
}
.font-details{
    color: #2a3531;
}

</style>