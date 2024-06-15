import { useDrag } from "react-dnd";
const ItemTypes = {
  FEATURE: 'feature'
};
const DraggableItem = ({ kind,type, children }) => {
  console.log(kind)
  const [, ref] = useDrag({
    type: ItemTypes.FEATURE,
    item: { type , kind},
  });

  return (
    <div ref={ref} style={{ margin: '8px', padding: '8px', border: '1px solid black', cursor: 'move' }}>
      {children}
    </div>
  );
};

export default DraggableItem