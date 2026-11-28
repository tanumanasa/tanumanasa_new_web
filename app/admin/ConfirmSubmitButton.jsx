'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';

export default function ConfirmSubmitButton({ children, className, confirmMessage, ariaLabel }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef(null);
  const cancelRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    cancelRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  function confirmDelete() {
    const form = triggerRef.current?.closest('form');
    if (!form) throw new Error('Delete confirmation must be used inside a form.');
    setOpen(false);
    form.requestSubmit();
  }

  return (
    <>
      <button
        ref={triggerRef}
        className={className}
        type="button"
        aria-label={ariaLabel}
        title="Delete"
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      {open && mounted && createPortal(
        <div className="adm-confirm-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}>
          <section className="adm-confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="adm-confirm-title" aria-describedby="adm-confirm-message">
            <header className="adm-confirm-header">
              <h2 id="adm-confirm-title">Delete Confirmation</h2>
              <button className="adm-confirm-close" type="button" aria-label="Cancel deletion" onClick={() => setOpen(false)}>
                <FiX aria-hidden="true" />
              </button>
            </header>
            <p className="adm-confirm-message" id="adm-confirm-message">{confirmMessage}</p>
            <footer className="adm-confirm-actions">
              <button className="adm-confirm-cancel" ref={cancelRef} type="button" onClick={() => setOpen(false)}>Cancel</button>
              <button className="adm-confirm-delete" type="button" onClick={confirmDelete}>Delete</button>
            </footer>
          </section>
        </div>,
        document.body
      )}
    </>
  );
}
