import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colorsArr = [
    "red",
    "green",
    "blue",
    "olive",
    "gray",
    "purple",
    "yellow",
    "pink",
    "lavender",
    "white",
    "black",
  ];

  const colorButton = colorsArr.map((col, index) => {
    console.log(index);
    let classes;
    if (index > 5 && index < 10) {
      classes = "outline-none px-4 py-1 rounded-full text-black shadow-lg";
    } else {
      classes = "outline-none px-4 py-1 rounded-full text-white shadow-lg";
    }
    return (
      <button
        key={index}
        onClick={() => setColor(col)}
        className={classes}
        style={{ backgroundColor: col, textTransform: "capitalize" }}
      >
        {col}
      </button>
    );
  });

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          {colorButton}
        </div>
      </div>
    </div>
  );
}

export default App;
