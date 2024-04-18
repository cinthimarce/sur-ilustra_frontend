import axios from "axios";

export async function initMercadoPagoCheckout(cartProducts) {
try {
    const orderData = cartProducts.map((product) => ({
        title: product.nombre,
        quantity: product.quantity,
        price: product.price,
    }));
    //enviando datos al Backend
    const response = await axios.post(
        "http://127.0.0.1:8000/createPreference",
        orderData
    );

    const preferenceId = await response.data.json();

    createCheckoutButton(preferenceId.id);
    } catch (error) {
    console.error("Error al inicializar Mercado Pago Checkout:", error);
    }
}

const createCheckoutButton = (preferenceId) => {
  const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");
  const bricksBuilder = mp.bricks();
  const renderComponent = async () => {
    if(window.checkoutButton) window.checkoutButton.unmount();
    await bricksBuilder.create("wallet", "wallet_container", {
        initialization: {
        preferenceId: preferenceId,
        },
        customization: {
        texts: {
            valueProp: "smart_option",
        },
      },
    });
  };
  renderComponent();
};
