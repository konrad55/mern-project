import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

interface SideDrawerProps {
  show: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ show, onClick, children }) => {
  const drawerRoot = document.getElementById("drawer-hook");

  if (!drawerRoot) {
    return null;
  }

  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside
        className="fixed left-0 top-0 z-[100] h-screen w-[70%] bg-white shadow-lg"
        onClick={onClick}
      >
        {children}
      </aside>
    </CSSTransition>
  );

  return createPortal(content, drawerRoot);
};

export default SideDrawer;
