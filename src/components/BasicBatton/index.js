import React from "react";
import classNames from 'classnames';
import Loader from "../Loader";

import './style.scss';

const BasicButton = ({
                  buttonText,
                  wrapperStyle,
                  buttonType,
                  disabled = false,
                  buttonStyle,
                  onClick = ()=>{},
                  children,
                  isFetching
                }) => {

  const buttonStyles = classNames({
    [`basicButton__button`]: true,
    [`basicButton__button_${buttonType}`]: !!buttonType,
  });

  return(
    <div className='basicButton' style={wrapperStyle}>
      <button
        onClick={onClick}
        className={buttonStyles}
        disabled={disabled}
        style={buttonStyle}
      >
        {isFetching ?
          buttonText
          : <Loader/>
        }
      </button>
    </div>
  )
};

export default BasicButton;
