import React, { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = () => {
  return <div className={`${classes.backdrop} w-full `}></div>;
};

const ModalOverlay = (props: { children: React.ReactNode, className?: string }) => {
  return (
    <div className="fixed flex  justify-center items-center inset-0 overflow-y-auto z-[199]">
      <div
        className={`${classes.modal}  bg-white dark:bg-gray-200 text-black dark:text-gray-100  rounded-lg py-6  px-3  ${props.className}`}
      >
        <div className={`${classes.content} md:w-96 xs:w-80`}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

let portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = (props: { children: React.ReactNode, className?: string }) => {
  return (
    <div className="w-96 absolute">
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay className={props.className}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </div>
  );
};

export default Modal;
