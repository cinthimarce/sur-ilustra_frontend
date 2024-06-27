import { MERCADOPAGO_API_KEY } from "./config";

export async function createCheckoutButton(preferenceId){
  document.getElementById('wallet_container').innerHTML = ''
    const mp = new window.MercadoPago(MERCADOPAGO_API_KEY,{
      locale: "es-CL"
    });
    const bricksBuilder = mp.bricks();
    const renderComponent = async () => {
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
}