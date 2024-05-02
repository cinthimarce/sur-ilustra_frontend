import axios from "axios";

export async function initMercadoPagoCheckout(cartProducts) {
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
        {"productos": orderData},
        //{"id": id, "productos": orderData}
    );

    const preferenceId = await response.data;
    //console.log(preferenceId.id);
    return preferenceId.id;

    //createCheckoutButton(preferenceId.id);
    } catch (error) {
    console.error("Error al inicializar Mercado Pago Checkout:", error);
    }
}

// const createCheckoutButton = (preferenceId) => {
//   const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");
//   const bricksBuilder = mp.bricks();
//   const renderComponent = async () => {
//     if(window.checkoutButton) window.checkoutButton.unmount();
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
//   };
//   renderComponent();
// };
