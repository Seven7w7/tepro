import React from "react";

export const ItemNavbar = ({ content, style_i, style_a }) => {
  return (
    <li className={style_i}>
      <a className={style_a} href="">
        {content}
      </a>
    </li>
  );
};
