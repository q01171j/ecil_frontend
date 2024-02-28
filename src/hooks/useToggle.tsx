import { useState } from 'react';

function useToggle(initialState: boolean = false): [boolean, () => void] {
  const [toggle, setToggle] = useState<boolean>(initialState);

  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  return [toggle, handleToggle];
}

export default useToggle;