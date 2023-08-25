import ReactDom from "react-dom";
import { useEffect } from "react";

export default function Modal({ onClose, children, actions }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDom.createPortal(
    <div className="fixed inset-0 flex justify-center items-center ">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black opacity-30 backdrop-blur-sm flex justify-center items-center"
      ></div>
      <div className="fixed p-6 bg-white rounded w-fit m-3 max-w-2xl">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end pt-3 flex-row gap-4" >{actions}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}
