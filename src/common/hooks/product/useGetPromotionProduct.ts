import { QUERY_KEYS } from '@group4officesupplies/common/constants/querykeys.constants';
import { IProductPromotional } from '@group4officesupplies/common/interface/product.interface';
import { getPromotionalProducts } from '@group4officesupplies/common/services/product.service';
import { useQuery } from 'react-query';

export const useGetPromotionProduct = () => {
  const result = useQuery<IProductPromotional[], Error>(
    [QUERY_KEYS.PROMOTION_PRODUCT],
    getPromotionalProducts,
  );
  return result;
};
