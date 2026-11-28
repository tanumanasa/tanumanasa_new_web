'use client';

import { useState } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

export default function AdminMenuDropdown({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="adm-menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="admin-sidebar-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        <span>Menu</span>
        <FiChevronDown className={open ? 'is-open' : ''} aria-hidden="true" />
      </button>
      <div
        id="admin-sidebar-menu"
        className={`adm-sidebar-menu ${open ? 'is-open' : ''}`}
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest('a')) setOpen(false);
        }}
      >
        {children}
      </div>
    </>
  );
}
