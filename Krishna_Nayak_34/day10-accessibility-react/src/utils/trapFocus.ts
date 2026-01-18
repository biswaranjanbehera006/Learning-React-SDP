export default function trapFocus(element: HTMLElement) {
  const focusable = element.querySelectorAll<HTMLElement>(
    "a, button, input, textarea, select, [tabindex]:not([tabindex='-1'])"
  );

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  element.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }

    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  first?.focus();
}
