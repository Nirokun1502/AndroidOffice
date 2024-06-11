import React from 'react';

// Tạo context
const ProductContext = React.createContext(); // Thay `defaultValue` bằng giá trị mặc định của context

export const ProductProvider = ProductContext.Provider;
export default ProductContext;
