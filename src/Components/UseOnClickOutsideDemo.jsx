import React, { useRef, useState } from "react";
import Modal from "./Modal";
import { useClickAway } from "../Hooks/useClickAway";
// import useOnClickOutside from "../Hooks/useOnClickOutSide";

const UseOnClickOutside = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const modalRef = useRef();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleOnClickOutside = () => {
    toggleModal();
  };

  // useOnClickOutside(modalRef, handleOnClickOutside);
  const modalRef = useClickAway(handleOnClickOutside)

  const footer = <button onClick={toggleModal}>
    Close Modal
  </button>

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <Modal header={"Header"} footer={footer} ref={modalRef}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit velit facere iusto reiciendis unde officia quasi odio
            dolorem quaerat accusamus voluptatem temporibus veniam, ratione
            officiis nesciunt labore eos? Sed, fugit.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default UseOnClickOutside;
