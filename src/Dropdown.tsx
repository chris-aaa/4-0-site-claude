import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Chevron, CaretCircle } from "./Icons";

type DropdownProps = {
  /** Trigger label (the visible text next to the caret). */
  label: ReactNode;
  /** Panel contents shown when open. */
  children: ReactNode;
  /** Visual variant of the caret button. */
  variant?: "nav" | "circle";
  /** Optional leading icon for the trigger. */
  icon?: ReactNode;
  /** Alignment of the panel relative to the trigger. */
  align?: "left" | "right";
  className?: string;
};

/**
 * A caret/chevron dropdown button. This is the interactive feature driven by the
 * "Controls/chevron new" caret instances in the Figma design: click the caret to
 * open a panel, click outside or press Escape to close, and the chevron rotates.
 */
export default function Dropdown({
  label,
  children,
  variant = "nav",
  icon,
  align = "left",
  className,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const Caret = variant === "circle" ? CaretCircle : Chevron;

  return (
    <div
      className={`dd ${variant === "circle" ? "dd-circle" : "dd-nav"} ${className ?? ""}`}
      ref={ref}
    >
      <button
        type="button"
        className={`dd-trigger ${open ? "is-open" : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        {icon && <span className="dd-icon">{icon}</span>}
        <span className="dd-label">{label}</span>
        <Caret size={variant === "circle" ? 18 : 16} className={`dd-caret ${open ? "rot" : ""}`} />
      </button>
      {open && (
        <div className={`dd-panel dd-panel-${align}`} id={panelId} role="menu">
          {children}
        </div>
      )}
    </div>
  );
}
