import axios from "axios";

export async function MercadoPagoIdPost(reloadId,cartProducts){
    try {
        
  
        const orderData = cartProducts.map((product) => ({
            title: product.nombre,
            quantity: product.quantity,
            price: product.price,
        })); //console.log(orderData);
        
        
        //enviando datos al Backend
        //debugger;
        const response = await axios.post(
            "http://127.0.0.1:8000/preference",
            { "id": reloadId,"productos": orderData},
            //{"id": id, "productos": orderData}
        );
    
        const preferenceId = await response.data;
        //console.log(preferenceId.id);
        //createCheckoutButton(preferenceId.id);
        return preferenceId.id;
    
        
        } catch (error) {
        console.error("Error al inicializar Mercado Pago Checkout:", error);
        }
}