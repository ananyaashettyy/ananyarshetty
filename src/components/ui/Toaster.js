import React from "react";
import { useToast } from "../../hooks/use-toast";
import "./Toaster.css";

const Toaster = () => {
  const { toasts } = useToast();
  return (
    <div className="toaster-container">
      {toasts.map(t => (
        <div key={t.id} className="toast">{t.description}</div>
      ))}
    </div>
  );
};

export default Toaster;
