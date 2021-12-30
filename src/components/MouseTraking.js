const { React, ReactDOM } = window;
const { useEffect, useState, Fragment } = React;
const { render } = ReactDOM;
const rootNode = document.getElementById("app");

export const useMouseTracking = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);
  return {
    x,
    y,
  };
};
