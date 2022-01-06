import { useEffect, useState } from "react";
import { useCallback } from "react";

import "./scrollstyle.css";

const PageScroller = ({ children }) => {
  const [componentIndex, setComponentIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [YPosition, setYPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e) => {
    console.log(Math.abs(e.deltaY));
    if (Math.abs(e.deltaY) > 1) {
      if (e.deltaY > 0) {
        // handle scroll down
        if (pageIndex < children.length - 1) {
          scroll(pageIndex + 1);
        }
      } else {
        // handle scroll up
        if (pageIndex > 0) {
          scroll(pageIndex - 1);
        }
      }
    }
  };

  const scroll = useCallback(
    (curPageIndex) => {
      if (!isScrolling) {
        setYPosition(curPageIndex * -100);
        setPageIndex(curPageIndex);
        setIsScrolling(true);

        setTimeout(() => {
          setComponentIndex(curPageIndex);
        }, 900);
      }
    },
    [isScrolling]
  );

  useEffect(() => {
    setIsScrolling(false);
  }, [componentIndex]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={"scroll_container"}
      style={{
        height: `${100 * children.length}%`,
      }}
    >
      <div
        className="page_container"
        style={{ "--YPosition": `${YPosition}%` }}
        onWheel={handleScroll}
      >
        {children}
      </div>
    </div>
  );
};

export default PageScroller;
