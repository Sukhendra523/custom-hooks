import React, { forwardRef } from "react";
import Portal from "./Portal";
import "../Styles/Modal.scss";

const Modal = forwardRef(({ header, footer, children }, ref) => {
  return (
    <Portal>
      <div className="modal" ref={ref}>
        <header className="modal-header">{header}</header>
        <hr />
        <main className="modal-body">{children}</main>
        <hr />
        <footer className="modal-footer">{footer}</footer>
      </div>
    </Portal>
  );
});

export default Modal;
