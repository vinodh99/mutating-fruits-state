import React, { useState } from "react";

import Container from "./Container";
function App() {
  const [state, setstate] = useState(["milk", "cheese", "water", "flour"]);

  const upClickHandler = index => {
    const newState = state.reduce(
      (acc, currentValue, currentindex, originalState) => {
        if (currentindex === index) {
          return acc;
        }
        if (currentindex === index - 1) {
          return [...acc, originalState[index], currentValue];
        }
        return [...acc, currentValue];
      },
      []
    );
    setstate(newState);
  };

  const downClickHandler = index => {
    const newState = state.reduce(
      (acc, currentValue, currentindex, originalState) => {
        if (currentindex === index) {
          return acc;
        }
        if (currentindex === index + 1) {
          return [...acc, currentValue, originalState[index]];
        }
        return [...acc, currentValue];
      },
      []
    );
    setstate(newState);
  };
  return (
    <div>
      {state.map((item, index) => {
        return (
          <Container
            item={item}
            upClickHandler={upClickHandler}
            downClickHandler={downClickHandler}
            state={state}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default App;
