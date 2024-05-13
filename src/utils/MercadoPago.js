import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export async function initMercadoPagoCheckout(cartProducts) {
try {
  
    const orderData = cartProducts.map((product) => ({
        title: product.nombre,
        quantity: product.quantity,
        price: product.price,
    })); //console.log(orderData);
    
    const idempotencyKey = uuidv4()
    
    //enviando datos al Backend
    //debugger;
    const response = await axios.post(
        "http://127.0.0.1:8000/preference",
        {"productos": orderData},{
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

// let checkoutButtonCreated = false;

// const createCheckoutButton = (preferenceId) => {
//   if (checkoutButtonCreated) {
//     return;
//   }
//   const mp = new window.MercadoPago("TEST-16336147-9940-4d4b-9879-55962fa88d9f",{
//     locale: "es-CL"
//   });
//   const bricksBuilder = mp.bricks();
//   const renderComponent = async () => {
//     await bricksBuilder.create("wallet", "wallet_container", {
//         initialization: {
//         preferenceId: preferenceId,
//         },
//         customization: {
//         texts: {
//             valueProp: "smart_option",
//         },
//       },
//     });
//     checkoutButtonCreated = true;
//   };
//   renderComponent();
// };
