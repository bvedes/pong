const PlayerTwo = ({ position }) => {
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
export default PlayerTwo;
