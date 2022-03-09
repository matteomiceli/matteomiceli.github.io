import React, { useState } from "react";
import { useEffect } from "react";

export default function Menu({ isHome, navExtend, setNavExtend }) {
  function toggleNav() {
    navExtend ? setNavExtend(false) : setNavExtend(true);
  }

  return (
    <button
      className={`fixed bottom-2 left-2 block z-50 lg:hidden transition-all duration-300 hover:scale-105 opacity-${
        isHome ? "0 pointer-events-none translate-y-12" : "100"
      } `}
      onClick={() => toggleNav()}
    >
      <img
        src={navExtend ? `/icons/close.svg` : `/icons/menu.svg`}
        alt="menu icon"
      />
    </button>
  );
}
