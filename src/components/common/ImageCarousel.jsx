import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(images[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
      setImage(images[index]);
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  function decrement() {
    index === 0
      ? setIndex(images.length - 1)
      : setIndex((index - 1) % images.length);
    setImage(images[index]);
  }

  function increment() {
    setIndex((index + 1) % images.length);
    setImage(images[index]);
  }

  return (
    <div>
      <button onClick={() => decrement()}>Decrement</button>
      <img src={image} alt="carousel" />
      <button onClick={() => increment()}>Increment</button>
    </div>
  );
}
