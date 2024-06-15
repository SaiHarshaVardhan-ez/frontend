import { useDrop } from "react-dnd";

const ItemTypes = {
  FEATURE: 'feature'
};

const DropZone = ({ onDrop, children }) => {
  const [, ref] = useDrop({
    accept: ItemTypes.FEATURE,
    drop: (item) => onDrop(item)
  });

  return (
    <div ref={ref} style={{ minHeight: '200px', padding: '16px', border: '1px solid black' }}>
      {children}
    </div>
  );
};

export default DropZone