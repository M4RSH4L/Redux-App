import { ProductActionTypes } from "../constants/product-action-type"


const initialState = {
}

const productList = [{
    id: 1,
    name: 'Iphone X',
    category: 'phone',
    description: 'Sản phẩm do Apple sản xuất',
    // image: 'https://cdn.tgdd.vn/Products/Images/42/114014/iphone-x-64gb-1-400x460.png',
    price: 1000,
    

}]

export const productReduer = (state = initialState, action) => { 
 
       switch (action.type) {
         case ProductActionTypes.ALL_PRODUCTS:
        return state;
        default:
             return state;
};
}