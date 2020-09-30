import React, { useState, useRef } from "react";
import Portal from "../Portal";
import "./style.scss";

const stopPropagation = (e) => e.stopPropagation();
const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args));

export function useModal() {
  const [on, setOn] = useState(false);
  const show = () => setOn(true);
  const hide = () => setOn(false);
  const toggle = () => setOn(!on);

  const getToggleProps = (props = {}) => ({
    "aria-controls": "target",
    "aria-expanded": Boolean(on),
    ...props,
    onClick: callAll(props.onClick, toggle)
  });

  const getContainerProps = (props = {}) => {
    return({
      ...props,
      onClick: callAll(props.onClick, hide),
      onKeyDown: callAll(
        props.onKeyDown,
        ({ keyCode }) => keyCode === 27 && hide()
      )
    });
  }

  return {
    on,
    show,
    hide,
    toggle,
    getToggleProps,
    getContainerProps,
  };
}

export function Container(props) {
  const overlayEl = useRef(null);

  return (
    <Portal rootId="root">
      <div className='Overlay'
        {...props}
        ref={overlayEl}
        aria-modal="true"
        tabIndex="-1"
      >
        <div onClick={stopPropagation}>
          {props.children}
        </div>
      </div>
    </Portal>
  );
}
