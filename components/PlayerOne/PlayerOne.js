const PlayerOne = ({ position }) => {
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
export default PlayerOne;
