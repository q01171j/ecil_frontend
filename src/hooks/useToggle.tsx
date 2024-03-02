import { useState } from 'react';

function useToggle(initialState: boolean = false): [boolean, () => void, () => void, () => void] {
  const [toggle, setToggle] = useState<boolean>(initialState);

  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  const handleToggleFalse = (): void => {
    setToggle(false);
  }

  const handleToggleTrue = (): void => {
    setToggle(true);
  }

  return [toggle, handleToggle, handleToggleFalse, handleToggleTrue];
}

export default useToggle;