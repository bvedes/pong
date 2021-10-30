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
export default Ball;
