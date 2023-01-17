import React, { useCallback } from "react";
import styles from "./styles.module.css";
import useDraggable from "../../Hooks/useDraggable";

const Draggable = () => {
  const handleDrag = useCallback(
    ({ x, y }) => ({
      x: Math.max(0, x),
      y: Math.max(0, y),
    }),
    []
  );

  const [ref] = useDraggable({
    onDrag: handleDrag,
  });

  return <div ref={ref} className={styles.draggable}></div>;
};

export default Draggable;
