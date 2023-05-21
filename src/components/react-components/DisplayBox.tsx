import { h } from "preact";
import { useState } from "preact/hooks";

import { DisplayBoxInterface } from "../types";
import styles from "./DisplayBox.module.css";

//pending add of interactivity toggle

export default function DisplayBox({
  image,
  title,
  subtitle,
  body,
}: DisplayBoxInterface) {
  const [open, setOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  function setOpenToggle() {
    setOpen(!open);
  }

  return (
    <article className={`stack-lg ${styles.card}`}>
      {image && <img src={image} alt="Random Image" className={styles.image} />}
      <div className="stack-sm">
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <small className={styles.subtitle}>{subtitle}</small>}
      </div>
      <p className={styles.body}>{body}</p>

      <button onClick={setOpenToggle}>toggle</button>
      {open && <div>toggle me</div>}
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        Hover over me!
      </button>
      {isShown && <div>I'll appear when you hover over the button.</div>}
    </article>
  );
}
