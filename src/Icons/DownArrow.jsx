import React from "react";

function DownArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="6"
      viewBox="0 0 8 6"
      style={{
        transform: props.rotate && "rotate(180deg)",
      }}
    >
      <path
        d="M4.416 5.376a.5.5 0 01-.832 0L.518.776A.5.5 0 01.934 0h6.132a.5.5 0 01.416.777L4.416 5.376z"
      ></path>
    </svg>
  );
}

export default DownArrow;