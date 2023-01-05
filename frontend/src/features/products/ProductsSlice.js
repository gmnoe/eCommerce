import { PRODUCTS } from '../../app/shared/PRODUCTS';

export const selectAllProducts = () => {
    return PRODUCTS;
};

// export const selectRandomProduct = () => {
//     return PRODUCTS[Math.floor(PRODUCTS.length * Math.random())];
// };

export const selectProductById = (id) => {
    return PRODUCTS.find((product) => product.id === parseInt(id));
};

// export const selectFeaturedProduct = () => {
//     return PRODUCTS.find((product) => product.featured);
// }