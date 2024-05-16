import React from "react";

export const ItemNavbar = ({ content, style_i, style_a }) => {
  return (
    <li>
      <a className={`block ${style_a}`} href="#">
        {content}
      </a>
    </li>
  );
};
