<template>
    <div>
        <div id="wallet_container"></div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    props: {
        cartProducts: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const hasProductsInCart = ref(false);

        const hasProducts = (cartProducts) => {
            return Object.keys(cartProducts).length > 0;
        };

        const loadMercadoPagoScript = () => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://sdk.mercadopago.com/js/v2';
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };

        const sendCartDataToBackend = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/createPreference', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(props.cartProducts),
                });
                const preference = await response.json();
                createCheckoutButton(preference.id);
            } catch (error) {
                console.error('Error al enviar los datos del carro de compra al backend:', error);
            }
        };

        const createCheckoutButton = (preferenceId) => {
            const renderComponent = async () => {
                try {
                    await window.Mercadopago.create('wallet', {
                        integration_date: new Date(),
                        collector_id: preferenceId,
                        preference: {
                            id: preferenceId,
                        },
                    });
                } catch (error) {
                    console.error('Error al renderizar el botón de Mercado Pago:', error);
                }
            };
            renderComponent();
        };

        onMounted(() => {
            hasProductsInCart.value = hasProducts(props.cartProducts);
            if (hasProductsInCart.value) {
                loadMercadoPagoScript()
                    .then(sendCartDataToBackend)
                    .catch((error) => {
                        console.error('Error al cargar el script de Mercado Pago:', error);
                    });
            }
        });

        return {
            hasProductsInCart,
        };
    },
};
</script>

<style>
/* Estilos opcionales para el componente */
</style>F