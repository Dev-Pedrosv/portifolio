import React from "react";

type Props = {};

function ButtonSwipper({}: Props) {
  return (
    <>
      <div id={`swiper-button-prev-experience`}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9999 6.99992L15.9999 8.99992L3.99991 8.99992L9.49991 14.4999L8.07991 15.9199L0.159913 7.99992L8.07991 0.0799228L9.49991 1.49992L3.99991 6.99992L15.9999 6.99992Z"
            fill="white"
          />
        </svg>
      </div>

      <div id={`swiper-button-next-experience`}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.73481e-05 9.00008L8.74356e-05 7.00008L12.0001 7.00008L6.50009 1.50008L7.92009 0.0800778L15.8401 8.00008L7.92009 15.9201L6.50009 14.5001L12.0001 9.00008L8.73481e-05 9.00008Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
}

export default ButtonSwipper;
