import React from "react";

function Container({ item, upClickHandler, downClickHandler, index }) {
  return (
    <div>
      <button onClick={() => upClickHandler(index)}>up</button>
      <button onClick={() => downClickHandler(index)}>down</button>
      {item}
    </div>
  );
}

export default Container;
