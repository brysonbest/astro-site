import { h } from "preact";
import { useState } from "preact/hooks";
import { DisplayBoxInterface } from "../types";

import classNames from "classnames";

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

  const cardClass = classNames({
    "dark:bg-black dark:text-white dark:shadow-none bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto min-w-min max-w-[64ch] ":
      true,
    "cursor-pointer": !open,
    "expanded-card w-full flex-1 grow": open,
  });

  function setOpenToggle() {
    setOpen(!open);
  }

  return (
    <article className={cardClass} onClick={setOpenToggle}>
      {image && <img src={image} alt="Random Image" className={styles.image} />}
      <div className="stack-sm">
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <small className={styles.subtitle}>{subtitle}</small>}
      </div>
      <p className={styles.body}>{body}</p>
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
