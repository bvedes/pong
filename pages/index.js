import { useState, useEffect } from "react";
import Ball from "../components/Ball";
import PlayerOne from "../components/PlayerOne";
import PlayerTwo from "../components/PlayerTwo";
import Results from "../components/Results ";

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

  /*useEffect(() => {
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
  }, [ballX, ballY, xDirection, yDirection]);*/

  return (
    <div className="h-screen bg-gray-900">
      <div className="flex justify-between">
        <PlayerOne position={positionP1} />
        <Results pointsP1={pointsP1} pointsP2={pointsP2} />
        <Ball left={ballX} top={ballY} />
        <PlayerTwo position={positionP2} />
      </div>
    </div>
  );
};
export default Pong;
