import { h } from "preact";
import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div>
      {/* <button
        class={"greeting-button"}
        alt={"Click for a new greeting"}
        style={{ backgroundColor: "transparent", border: "none" }}
        onClick={() => setGreeting(randomMessage())}
      >
      </button> */}
      <h1>{greeting}!</h1>
    </div>
  );
}
