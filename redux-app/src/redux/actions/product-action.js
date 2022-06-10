import { ProductActionTypes} from "../constants/product-action-type";

export const allProducts = (products) => {
    return {
        type: ProductActionTypes.ALL_PRODUCTS,
        payload: products
    };
};

export const selectedProduct = (product) => {
    return {
        type: ProductActionTypes.SELECTED_PRODUCTS,
        payload: product
    }
};

export const removeProducts = () => {
    return {
        type: ProductActionTypes.SELECTED_PRODUCT
    }
}