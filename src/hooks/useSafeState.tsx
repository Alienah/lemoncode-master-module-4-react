import { useEffect, useRef, useState } from 'react';

export const useSafeState = <T extends {}>(
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(initialValue);

  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const isMounted = () => mountedRef.current;

  const setSafeState = function(
    data: T
  ): React.Dispatch<React.SetStateAction<T>> | void {
    return isMounted() ? setState(data) : null;
  };

  return [state, setSafeState];
};
