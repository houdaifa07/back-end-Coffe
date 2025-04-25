export const AddToCart = (product) => ({
    type: 'ADD',
    payload: product
});
export const Dellet = (id) => ({
    type: 'del',
    payload: id
});
export const Clear = (id) => ({
    type: 'clear',
    payload: id
});