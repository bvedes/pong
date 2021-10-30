import { useState, useEffect } from "react";

const Results = ({ pointsP1, pointsP2 }) => {
  return (
    <div className="flex justify-between w-full min-h-screen p-4">
      <div className="text-9xl text-white p-16">{pointsP1}</div>
      <div className="bg-white p-[2px] opacity-50"></div>
      <div className="text-9xl text-white p-16">{pointsP2}</div>
    </div>
  );
};

const Ball = ({ left, top }) => {
  console.log({ left, top });
  const getBallStyle = () => {
    if (top > 50 && left > 50) {
      return { left: `calc(${left}% - 20px)`, top: `calc(${top}% - 20px)` };
    }
    if (left > 98) {
      return { left: `calc(${left}% - 20px)`, top: `${top}%` };
    }
    if (top > 98) {
      return { left: `${left}%`, top: `calc(${top}% - 20px)` };
    }
    return { left: `${left}%`, top: `${top}%` };
  };

  return (
    <div
      style={getBallStyle()}
      className="fixed h-[20px] w-[20px] bg-white"
    ></div>
  );
};

const Player1 = ({ position }) => {
  return (
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
  );
};

const Player2 = () => {
  return (
    <div
      style={{
        background: "red",
        height: "100px",
        width: "20px",
      }}
    />
  );
};

const Pong = () => {
  const [pointsP1, setPointsP1] = useState(0);
  const [pointsP2, setPointsP2] = useState(0);
  const [positionP1, setPositionP1] = useState(10);
  const [ballX, setBallX] = useState(20);
  const [ballY, setBallY] = useState(30);

  useEffect(() => {
    const handleDown = ({ key }) => {
      if (key === "ArrowUp") {
        setPositionP1((prevPosition) => {
          if (prevPosition > 0) {
            return prevPosition - 1;
          }
          return prevPosition;
        });
      }
      if (key === "ArrowDown") {
        setPositionP1((prevPosition) => {
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
  }, [positionP1]);

  useEffect(() => {
    // setBallX(ballX + 1)
    // Use prevState to make state update based on the previous one.
    setBallX((prevState) => {
      if (prevState < 100) {
        return prevState + 1;
      }
      return prevState;
    });
    setBallY((prevState) => {
      if (prevState < 100) {
        return prevState + 1;
      }
      return prevState;
    });
  }, [ballX, ballY]);

  return (
    <div className="h-screen bg-gray-900">
      <div className="flex justify-between">
        <Player1 position={positionP1} />
        <Results pointsP1={pointsP1} pointsP2={pointsP2} />
        <Ball left={ballX} top={ballY} />
        <Player2 />
      </div>
    </div>
  );
};
export default Pong;
