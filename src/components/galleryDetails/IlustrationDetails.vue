<script setup>
import { useGaleryStore } from '@/stores/galery';
import { useCartStore } from '@/stores/cart';
import { ref,onMounted,computed,onUnmounted} from 'vue'
import { useRoute } from 'vue-router';
import { useStorage} from '@vueuse/core'
import { formatCurrency } from '@/components/base/FormatCurrent.js'
import Swal from 'sweetalert2';

// importando componentes
import BreadcrumbsComp from '../gallery/base/BreadcrumbsComp.vue';
import GalleryImg from './galleryDesktop/GalleryImg.vue'
import GalleryCardSmall from './galleryDesktop/GalleryCardSmall.vue'
import CartDetails from './galleryComps/CartDetails.vue';
import PriceDetails from './galleryComps/PriceDetails.vue'
import ProductCounter from './galleryComps/ProductCounter.vue'
import AddCartButton from './galleryComps/AddCartButton.vue';
import CarruselGalleryComp from './galleryMobile/CarruselGalleryComp.vue' 

//reactive values
const galeriaStore = useGaleryStore();
const cartStore = useCartStore();
const route = useRoute()
const nameIlustracion = route.params.nombre;



//Manejo de los datos e imagenes 
const ilustracionStorage = useStorage(`datosIlustraciones_${nameIlustracion}`);
const ilustraciones = ref({});
const imagen1 = ref('');
const imagen2 = ref('');
const currentImage = ref('');
const handleChangeImage = (newImage) => {
    currentImage.value = newImage
}

//manejo de rutas
const rutas = [
    {
        title: 'Inicio',
        disabled: false,
        to: '/'
    },
    {
        title: 'Ilustraciones',
        disabled: false,
        to: '/ilustraciones'
    },
    {
        title: nameIlustracion,
        disabled: true
    }

    
];
//Manejo del toogleButton
const marcoAgregado = ref(false)

const priceText = computed(() =>{
    return marcoAgregado.value ? '(*Precio por lámina + marco)' :'(*Precio por unidad)'; 
});

//Cambio de Precios
const precioDinamico = computed(() =>{
    const precio = parseInt(ilustraciones.value.precio)
    const precioMarco = parseInt(ilustraciones.value.precioMarco)
    return marcoAgregado.value ? precio + precioMarco : precio
})
const toogleMarco = (() => {
    marcoAgregado.value = !marcoAgregado.value
});
//Contar y agregar productos 

const countProduct = ref(0)
const incrementProduct = () => countProduct.value++
const decrementProduct = () =>(countProduct.value > 0 ? countProduct.value-- : null)


const addProduct = (item) =>{
    if(countProduct.value > 0){
        const precio = parseInt(ilustraciones.value.precio)
        const precioMarco = parseInt(ilustraciones.value.precioMarco)
        const price = marcoAgregado.value ? precio + precioMarco : precio

        let product = {
            id: item.id,
            nombre: item.nombre,
            imagen: item.imagen1,
            quantity: countProduct.value,
            withFrame: marcoAgregado.value,
            price: price
        };
        cartStore.addProductToCart(product);
        countProduct.value = 0;
        Swal.fire({
            title: "Producto agregado con exito",
            //text:"",
            icon: 'success',
            iconColor: 'greenlight',
            confirmButtonColor: 'green',
            confirmButtonText: 'Entendido',
            timer: 1500,
            timerProgressBar: true,
            //toast: true
        })
    }
}


// Lifecycle hooks
onMounted(() => {
    ilustraciones.value = galeriaStore.getIlustrationByTitle(nameIlustracion)
    //console.log(ilustraciones.value)

    // Actualizar los datos de las Ilustraciones desde la tienda si no están en el almacenamiento local
    try {
        if (ilustracionStorage.value) {
            ilustraciones.value = JSON.parse(ilustracionStorage.value);
        } else {
            ilustraciones.value = galeriaStore.getIlustrationByTitle(nameIlustracion);
            ilustracionStorage.value = JSON.stringify(ilustraciones.value)
        }
    } catch (error) {
        console.error("Error al analizar los datos JSON:", error);
    }

    if (ilustraciones.value) {
        imagen1.value = ilustraciones.value.imagen1;
        imagen2.value = ilustraciones.value.imagen2;
        currentImage.value = ilustraciones.value.imagen1;
    }
    // console.log(ilustraciones.value)
    // console.log(imagen1.value)

})
onUnmounted(() => {
    ilustracionStorage.value = null;
    localStorage.removeItem(`datosIlustraciones_${nameIlustracion}`)
})

</script>

<template>
    <v-container>
        <BreadcrumbsComp :rutas="rutas"/>
        <v-row d-flex>
            <!-- CARRUSEL MODO MOBILE -->
            <v-col cols=12 class="d-md-none">
                <CarruselGalleryComp
                :imageCarousel1="imagen1"
                :imageCarousel2="imagen2"/>
            </v-col>
            <!--IMAGENES PEQUEÑAS MODO DESKTOP-->
            <v-col class="d-none d-md-flex" md=2>
                <v-card-actions class="d-flex align-center flex-column" height="200">
                    <v-col cols="auto" class="pa-10">
                        <v-sheet :height="130" :width="130">
                            <v-hover v-slot="{ isHovering, props }">
                                <GalleryCardSmall :is-hovering="isHovering" :props="props" :src_image="imagen1"
                                    @change-image="handleChangeImage" />
                            </v-hover>
                        </v-sheet>
                        <v-sheet :height="130" :width="130">
                            <v-hover v-slot="{ isHovering, props }">
                                <GalleryCardSmall :is-hovering="isHovering" :props="props" :src_image="imagen2"
                                    @change-image="handleChangeImage" />
                            </v-hover>
                        </v-sheet>
                    </v-col>
                </v-card-actions>
            </v-col>
            <!--IMAGEN PRINCIPAL MODO DESKTOP-->
            <v-col class="d-none d-md-flex" cols="auto" md=6>
                <GalleryImg :src_image="currentImage" />
            </v-col>
            <!--CARD DETALLES PRODUCTOS-->
            <v-col cols="auto" order=12>
                <v-card class="mx-auto pt-1 px-4" width="300" elevation="0">
                    <!-- DESCRIPCIÓN DEL PRODUCTO -->
                    <CartDetails :details="ilustraciones"/>
                    <!--DETALLES DEL PRECIO-->
                    <PriceDetails :format-currency="formatCurrency" :precio-mostrado="ilustraciones.precio" 
                    :price-text="priceText"
                    :price-marco="ilustraciones.precioMarco"
                    :precio-dinamico="precioDinamico"
                    @toggle-marco="toogleMarco"/>
                    <!--PRODUCT COUNTER-->
                    <ProductCounter :count="countProduct" @add="incrementProduct"
                    @remove="decrementProduct"/>
                    <!-- BOTTOM ADD CART-->
                    <AddCartButton
                    @add-product="addProduct"
                    :ilustration="ilustraciones"/>
                    <v-btn to="/cart" class= "d-flex justify-center mx-7 color-bg-cart color-font" elevation="0" >
                        Ir al carrito
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.color-bg-cart{
    background-color: #315467;
}
.color-font{
    color: #e3f26d;
}
</style>