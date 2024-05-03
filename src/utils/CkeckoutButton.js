export async function createCheckoutButton(preferenceId){
    const mp = new window.MercadoPago("TEST-16336147-9940-4d4b-9879-55962fa88d9f",{
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