import { QUERY_KEYS } from '@group4officesupplies/common/constants/querykeys.constants';
import { IProduct } from '@group4officesupplies/common/interface/product.interface';
import { getProducts } from '@group4officesupplies/common/services/product.service';
import { useQuery } from 'react-query';

export const useGetProducts = () => {
  return useQuery<IProduct[], Error>([QUERY_KEYS.NORMAL_PRODUCT], getProducts);
};
