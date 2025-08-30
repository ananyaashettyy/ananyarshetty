import { useState } from "react";

let id = 0;

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const toast = (description) => {
    const newToast = { id: ++id, description };
    setToasts([...toasts, newToast]);
    setTimeout(() => {
      setToasts((t) => t.filter(x => x.id !== newToast.id));
    }, 3000);
  };

  return { toasts, toast };
};
