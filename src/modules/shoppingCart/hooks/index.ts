import { useCallback, useState } from "react";

export const useVisibleShoppingCart = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = useCallback(() => setOpen((prevOpen) => !prevOpen), []);

  return {
    open,
    onToggle: handleToggle,
  };
};
