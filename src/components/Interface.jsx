import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Link } from "react-router-dom";
import DropZone from "./interfaceComponents/DropZone";
import DraggableItem from "./interfaceComponents/DraggableItem";

const Interface = () => {
  const [droppedItem, setDroppedItem] = useState(null);
  console.log(droppedItem);

  const handleDrop = (item) => {
    setDroppedItem(item);
  };

  const handleDataInput = (e) => {
    e.preventDefault();
    const inputElement = e.target.querySelector("input");

    if (inputElement.type === "file" && inputElement.files[0]) {
      const file = inputElement.files[0];
      if (file.type.match("image.*")) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageDataUrl = reader.result;
          const imageElement = document.createElement("img");
          imageElement.src = imageDataUrl;
          document
            .querySelector(".content-container")
            .appendChild(imageElement);
        };
        reader.readAsDataURL(file);
      } else if (file.type.match("video.*")) {
        const videoUrl = URL.createObjectURL(file);
        const videoElement = document.createElement("video");
        videoElement.src = videoUrl;
        videoElement.controls = true;
        document.querySelector(".content-container").appendChild(videoElement);
      } else {
        console.log("Unsupported file type");
      }
    } else if (inputElement.type === "text" && inputElement.value) {
      const textElement = document.createElement("p");
      textElement.textContent = inputElement.value;
      document.querySelector(".content-container").appendChild(textElement);
    } else {
      console.log("Unsupported file type or empty input");
    }
    console.log("data submitted");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit button clicked", droppedItem);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen justify-center bg-gray-100">
        <div className="w-full max-w-6xl p-4 mx-auto">
          <h1 className="text-3xl font-bold mb-4">Interface Page</h1>
          <div className="flex flex-row mb-4">
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
            <div className="w-3/5 pl-4">
              <h2 className="text-lg font-bold mb-2">Management</h2>
              <DropZone
                onDrop={handleDrop}
                className="bg-white p-4 rounded shadow flex flex-col"
              >
                <div className="mt-4">
                  <div className="content-container mb-4"></div>
                  {droppedItem && (
                    <div className="p-4 border border-gray-200 rounded mb-4">
                      <form onSubmit={handleDataInput}>
                        <input
                          type={droppedItem.kind || "text"}
                          className="w-full p-2 pl-10 text-sm text-gray-700"
                          placeholder={droppedItem.type}
                        />
                        <button
                          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-2"
                          type="submit"
                        >
                          +
                        </button>
                      </form>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <button
                      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                    <Link to="/">
                      <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
                        type="button"
                      >
                        Cancel
                      </button>
                    </Link>
                  </div>
                </div>
              </DropZone>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Interface;
