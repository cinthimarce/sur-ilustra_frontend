import axios from "axios";
import { defineStore } from "pinia";

export const useGaleryStore = defineStore('galery',{
    state: () => ({
        products: []
    }),
    getters: {
        fullProducts(state){
            return state.products
        }
    },
    actions: {
        async getProducts(){
            try {
                const queryProducts = await axios.get('https://fakestoreapi.com/products')
                const dataProducts = await queryProducts.data
                //console.log(dataProducts)
                dataProducts.forEach(element => {
                    this.products.push(element)
                });
                console.log(this.products)
            } catch (error) {
                console.error("No se lograron obtener los productos", error)
            }
        }
    }
})