import React from "react";
import DraggableItem from "./DraggableItem";

const Features = () => {

  

  return (
    <>
      <div className="w-1/5 pr-4">
        <h2 className="text-lg font-bold mb-2">Features</h2>
        <DraggableItem
          type="Image"
          kind="file"
          className="bg-white p-2 rounded shadow mb-2"
        >
          Image
        </DraggableItem>
        <DraggableItem
          type="File"
          kind="file"
          className="bg-white p-2 rounded shadow mb-2"
        >
          File
        </DraggableItem>
        <DraggableItem
          type="Video"
          kind="file"
          className="bg-white p-2 rounded shadow mb-2"
        >
          Video
        </DraggableItem>
        <DraggableItem
          type="Text"
          kind="text"
          className="bg-white p-2 rounded shadow mb-2"
        >
          Text
        </DraggableItem>
      </div>
    </>
  );
};

export default Features;
