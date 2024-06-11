import { QUERY_KEYS } from '@group4officesupplies/common/constants/querykeys.constants';
import { useQuery } from 'react-query';
import { getProfileUser } from '../profile.service';

export const useGetProfile = (userId: string) => {
  return useQuery([QUERY_KEYS.USER_PROFILE], () => getProfileUser(userId));
};
