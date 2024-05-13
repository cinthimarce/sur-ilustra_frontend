import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export async function MercadoPagoIdPost(reloadId,cartProducts){
    try {
        
  
        const orderData = cartProducts.map((product) => ({
            title: product.nombre,
            quantity: product.quantity,
            price: product.price,
        })); //console.log(orderData);
        
        const idempotencyKey = uuidv4()
        //console.log(idempotencyKey)
        //enviando datos al Backend
        //debugger;
        const response = await axios.post(
            "http://127.0.0.1:8000/preference",
            { "id": reloadId,"productos": orderData},{
                headers: {
                    "Content-Type": "application/json",
                    "X-Idempotency-Key": idempotencyKey
                }
            }
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