const Results = ({ pointsP1, pointsP2 }) => {
  return (
    <div className="flex justify-between w-full min-h-screen p-4">
      <div className="text-9xl text-white p-16">{pointsP1}</div>
      <div className="bg-white p-[2px] opacity-50"></div>
      <div className="text-9xl text-white p-16">{pointsP2}</div>
    </div>
  );
};
export default Results;
