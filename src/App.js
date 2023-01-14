import React, { useEffect, useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //useEffectを使用する場合
  /*
  useEffect(() => {
    console.log("カウンター1のボタンがクリックされました");
  }, [count1]);

  useEffect(() => {
    console.log("カウンター2のボタンがクリックされました");
  }, [count2]);
  */

  //useEffectを使用しない場合
  console.log("カウンター1のボタンがクリックされました");
  console.log("カウンター2のボタンがクリックされました");

  return (
    <>
      <p>カウンター1: {count1}</p>
      <div>
        <button onClick={() => setCount1((prevCount) => prevCount + 1)}>
          カウントを増やす
        </button>
      </div>
      <p>カウンター2: {count2}</p>
      <div>
        <button
          variant="success"
          onClick={() => setCount2((prevCount) => prevCount + 1)}
        >
          カウントを増やす
        </button>
      </div>
    </>
  );
}

export default App;
