import * as React from "react";
import { useMotionValue, Reorder, useDragControls, type DragControls } from "framer-motion";
import { CardITem } from "./CardITem";

interface Props {
  item: number;
  name?:String
  href?:String
}

export const Item = ({ item, name, href}: Props) => {
  const y = useMotionValue(0);
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={item}
      style={{ y }}
      dragListener={false}
      dragControls={dragControls}
    >
      <CardITem href={href} name={name} dragControls={dragControls}/>
    </Reorder.Item>
  );
};
