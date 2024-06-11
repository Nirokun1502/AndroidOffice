import _ from 'lodash';
import {
  DependencyList,
  EffectCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';

export default function useDeepEffect() {
  function useDeepCompareMemoize(value: DependencyList) {
    const ref = useRef(value);
    const numRef = useRef(0);

    const isEqual = _.isEqual(value, ref.current);
    if (!isEqual) {
      ref.current = value;
      numRef.current += 1;
    }
    return useMemo(() => ref.current, [numRef.current]);
  }

  function useDeepCompareEffect(
    callback: EffectCallback,
    dependencies: DependencyList,
  ) {
    if (!dependencies || !dependencies.length) {
      throw new Error(
        'useDeepCompareEffect should not be used with no dependencies. Use useEffect instead.',
      );
    }
    return useEffect(callback, useDeepCompareMemoize(dependencies));
  }
  return { useDeepCompareEffect };
}
