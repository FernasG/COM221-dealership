export const Helpers = {
    currency: ((price: number) => {
        return price.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' });
    })
};