import React, { useState, createContext } from 'react';

import { ProductProps } from '../interfaces/ProductInterface';

interface ProductProviderProps {
  itemsCheckout: ProductProps[];
  clearItems: () => void;
  addOrRemoveItem: (item: ProductProps, action: 'add' | 'remove') => void;
}

export const DataContext = createContext({} as ProductProviderProps);

const ProductProvider: React.FC = ({ children }) => {
  const [itemsCheckout, setItemsCheckout] = useState<ProductProps[]>([]);

  return (
    <DataContext.Provider
      value={{
        itemsCheckout,
        clearItems: () => {
          setItemsCheckout([]);
        },
        addOrRemoveItem: (item, action) => {
          console.log(`Novo item adicionado: ${JSON.stringify(item.title)}`);

          let itemsCheckoutCopy = [...itemsCheckout];

          const findedItem = itemsCheckoutCopy.find(product => product.id === item.id);

          if (findedItem?.id) {
            for (const key in itemsCheckoutCopy) {
              if (itemsCheckoutCopy[key].id === findedItem.id) {
                const objCopy = Object.assign({}, itemsCheckoutCopy[key]);

                if (action === 'add') {
                  objCopy.qty++;
                  itemsCheckoutCopy[key] = objCopy;
                } else if (action === 'remove') {
                  objCopy.qty--;
                  if (objCopy.qty > 0) {
                    itemsCheckoutCopy[key] = objCopy;
                  } else {
                    itemsCheckoutCopy.splice(+key, 1);
                  }
                }
                break;
              }
            };
          } else {
            if (action === 'add') {
              item.qty = 1;
              itemsCheckoutCopy = [...itemsCheckoutCopy, item];
            }
          }
          setItemsCheckout(itemsCheckoutCopy);
        }
      }
      }>
      {children}
    </DataContext.Provider>
  );
};

export default ProductProvider;