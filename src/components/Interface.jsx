import React from "react";
import { Link } from "react-router-dom";

const Interface = () => {
  const handleSubmit = () => {
    console.log("submit button clicked");
  };
  return (
    <>
      <h1>Interface Page</h1>
      <div>
        <div>
          this part with features
          <div>img</div>
          <div>file</div>
          <div>vid</div>
          <div>text</div>
        </div>
        <div>
          this part managements
          <form onSubmit={handleSubmit}>
            {/* this part will be having the dragged things */}
            <button type="submit">Save</button>
            <Link to="/">
              <button>Cancle</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Interface;
