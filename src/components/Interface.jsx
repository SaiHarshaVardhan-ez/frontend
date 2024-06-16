import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Features from "./interfaceComponents/Features";
import Editor from "./interfaceComponents/Editor";

const Interface = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="flex h-screen justify-center bg-gray-100">
          <div className="w-full max-w-6xl p-4 mx-auto">
            <h1 className="text-3xl font-bold mb-4">Interface Page</h1>
            <div className="flex flex-row mb-4">
              <Features />
              <Editor />
            </div>
          </div>
        </div>
      </DndProvider>
    </>
  );
};

export default Interface;
