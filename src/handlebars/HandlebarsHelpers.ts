export const Helpers = {
    currency: ((price: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
    }),
    date: ((date: string) => {
        return new Date(date).toLocaleDateString('pt-BR');
    })
};