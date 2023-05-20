import { h } from "preact";
import { useState } from "preact/hooks";

export default function DisplayBox(props) {
  const [open, setOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  function setOpenToggle() {
    setOpen(!open);
  }

  return (
    <div>
      <button onClick={setOpenToggle}>toggle</button>
      {open && <div>toggle me</div>}
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        Hover over me!
      </button>
      {isShown && <div>I'll appear when you hover over the button.</div>}
    </div>
  );
}
