import React from 'react';

const Button = ({ title, classContainer, Click }) => {
  return (
    <button className={`btn btn-secondary ${classContainer}`} onClick={Click}>
      {title}
    </button>
  );
};

export default Button;