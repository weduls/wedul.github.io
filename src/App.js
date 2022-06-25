import React from "react";
import Potato from "./Potato";
import Food from "./Food";

function App() {
  return (
    <div>
      <h1>Hello</h1>
        <Potato/>
        // 문자열을 제외하고는 무조건 {}를 감싸줘야한다.
        <Food fav="kimchi" something={true} papa={"['hello', 1, 2, 3,4,true]"}/>
    </div>
  );
}

export default App;
