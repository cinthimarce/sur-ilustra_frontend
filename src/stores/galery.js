import axios from "axios";
import { defineStore } from "pinia";

export const useGaleryStore = defineStore('galery',{
    state: () => ({
        ilustrationes: [],
        avecillas: [],
    }),
    getters: {
        ilustratiosState(state){
            return state.ilustrationes
        },
        avecillasState(state){
            return state.avecillas
        }
    },
    actions: {
        async getIlustrations(){
            try { 
                const queryProducts = await axios.get('http://127.0.0.1:8000/productos/ilustracion')
                const dataProducts = await queryProducts.data
                //console.log(dataProducts)
                dataProducts.forEach(element => {
                    this.ilustrationes.push(element)
                });
                console.log(this.ilustrationes)
            } catch (error) {
                console.error("No se lograron obtener las ilustraciones", error)
            }
        },
        async getIAvecillas(){
            try { 
                const queryProducts = await axios.get('http://127.0.0.1:8000/productos/avecillas')
                const dataProducts = await queryProducts.data
                console.log(dataProducts)
                dataProducts.forEach(element => {
                    this.avecillas.push(element)
                });
                console.log(this.avecillas)
            } catch (error) {
                console.error("No se lograron obtener las avecillas", error)
            }
        },
        getIlustrationByTitle(nombre){
            return this.ilustratiosState.find(prod => prod.nombre == nombre)
          },

    }
})