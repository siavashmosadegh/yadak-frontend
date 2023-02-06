import React from "react";

function LineArrowIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="8"
      viewBox="0 0 13 8"
      style={{
          transform : `rotate(${props.rotate}deg)`
      }}
    >
      <g clip-path="url(#clip0)">
        <path
          d="M6.015 4.694l4.5-4.5a.66.66 0 01.931 0l.394.394a.659.659 0 010 .931L6.482 6.877a.664.664 0 01-.934 0L.193 1.522a.659.659 0 010-.931L.587.197a.659.659 0 01.931 0l4.497 4.497z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H12.032V7.069H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default LineArrowIcon;