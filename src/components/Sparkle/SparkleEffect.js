import { useEffect } from "react";
import "./SparkleEffect.css";
const SparkleEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");

      sparkle.style.left = `${e.pageX - 7.5}px`;
      sparkle.style.top = `${e.pageY - 7.5}px`;
      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default SparkleEffect;
