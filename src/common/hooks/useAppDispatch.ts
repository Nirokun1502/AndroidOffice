import { useDispatch } from 'react-redux';
import { AppDispatch } from '@clvtube/common/redux/store';

export function useAppDispatch() {
  return useDispatch<AppDispatch>();
}
