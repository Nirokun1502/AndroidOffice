import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@group4officesupplies/common/redux/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
