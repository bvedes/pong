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
  const getBallStyle = () => {
    if (top > 50 && left > 50) {
      return { left: `calc(${left}% - 20px)`, top: `calc(${top}% - 20px)` };
    }
    if (left > 100) {
      return { left: `calc(${left}% - 20px)`, top: `${top}%` };
    }
    if (top > 100) {
      return { left: `${left}%`, top: `calc(${top}% - 20px)` };
    }
    return { left: `${left}%`, top: `${top}%` };
  };

  return (
    <div
      style={getBallStyle()}
      className="fixed h-[20px] w-[20px] bg-white rounded-full opacity-80"
    />
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

const Player2 = ({ position }) => {
  return (
    <div
      style={{
        position: "fixed",
        background: "red",
        height: "100px",
        width: "20px",
        top: `${position}%`,
        right: 0,
      }}
    />
  );
};

const Pong = () => {
  const [pointsP1, setPointsP1] = useState(0);
  const [pointsP2, setPointsP2] = useState(0);
  const [positionP1, setPositionP1] = useState(10);
  const [positionP2, setPositionP2] = useState(50);
  const [ballX, setBallX] = useState(0);
  const [ballY, setBallY] = useState(30);
  const [xDirection, setXDirection] = useState(1);
  const [yDirection, setYDirection] = useState(1);
  const speed = 0.25;

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
      if (prevState === 100) {
        setXDirection(-1);
      }
      if (prevState === 0) {
        setXDirection(1);
      }
      if (xDirection >= 0 && prevState <= 100) {
        return prevState + speed;
      }
      if (xDirection <= 0 && prevState >= 0) {
        return prevState - speed;
      }
    });
    setBallY((prevState) => {
      if (prevState === 100) {
        setYDirection(-1);
      }
      if (prevState === 0) {
        setYDirection(1);
      }
      if (yDirection >= 0 && prevState <= 100) {
        return prevState + speed;
      }
      if (yDirection <= 0 && prevState >= 0) {
        return prevState - speed;
      }
    });
  }, [ballX, ballY, xDirection, yDirection]);

  return (
    <div className="h-screen bg-gray-900">
      <div className="flex justify-between">
        <Player1 position={positionP1} />
        <Results pointsP1={pointsP1} pointsP2={pointsP2} />
        <Ball left={ballX} top={ballY} />
        <Player2 position={positionP2} />
      </div>
    </div>
  );
};
export default Pong;
