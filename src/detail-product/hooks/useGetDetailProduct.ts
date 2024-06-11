import { QUERY_KEYS } from '@group4officesupplies/common/constants/querykeys.constants';
import { getProductById } from '@group4officesupplies/common/services/product.service';
import { useQuery } from 'react-query';

export const useGetDetailProduct = (productId: string) => {
  return useQuery([QUERY_KEYS.DETAIL_PRODUCT, productId], () =>
    getProductById(productId),
  );
};
