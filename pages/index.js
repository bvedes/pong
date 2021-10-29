import { useState, useEffect } from "react";

const Pong = () => {
  const [firstpaddle, setFirstPaddle] = useState(0);
  const [lastpaddle, setLastPaddle] = useState(0);
  const [position, setPosition] = useState(10);

  useEffect(() => {
    const handleDown = ({ key }) => {
      if (key === "ArrowUp") {
        setPosition((prevPosition) => {
          if (prevPosition > 0) {
            return prevPosition - 1;
          }
          return prevPosition;
        });
      }
      if (key === "ArrowDown") {
        setPosition((prevPosition) => {
          if (prevPosition < 92) {
            return prevPosition + 1;
          }
          return prevPosition;
        });
      }
    };
    window.addEventListener("keydown", handleDown);
    return () => {
      window.removeEventListener("keydown", handleDown);
    };
  }, [position]);

  return (
    <div className="h-screen bg-gray-900">
      <div className="flex justify-between">
        <div
          style={{
            position: "fixed",
            background: "red",
            height: "100px",
            width: "20px",
            top: `${position}%`,
            left: 0,
          }}
        />
        <div className="flex justify-between w-full min-h-screen p-4">
          <div className="text-9xl text-white p-16">{firstpaddle}</div>
          <div className="bg-white p-2"></div>
          <div className="text-9xl text-white p-16">{lastpaddle}</div>
        </div>
        <div className="box-border h-44 w-2 border-4 bg-white"></div>
      </div>
    </div>
  );
};
export default Pong;
