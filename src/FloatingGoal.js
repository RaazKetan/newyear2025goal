import React, { useState, useEffect } from "react";

const FloatingGoal = ({ goal, toggleAchieved, deleteGoal, avoidArea }) => {
  const [paused, setPaused] = useState(false);

  const getRandomPosition = () => {
    let top, left;
    do {
      top = Math.random() * 90 + "%";
      left = Math.random() * 90 + "%";
    } while (
      avoidArea &&
      parseFloat(top) > avoidArea.top &&
      parseFloat(top) < avoidArea.bottom &&
      parseFloat(left) > avoidArea.left &&
      parseFloat(left) < avoidArea.right
    );
    return { top, left };
  };

  const [position, setPosition] = useState(getRandomPosition);

  useEffect(() => {
    if (avoidArea) setPosition(getRandomPosition());
  }, [avoidArea]);

  return (
    <div
      className={`absolute w-40 p-3 rounded-lg shadow-md bg-white text-gray-800 cursor-pointer transition-transform duration-300 ${
        paused ? "animate-none" : "animate-floating"
      }`}
      style={position}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={goal.achieved ? "line-through text-green-500" : ""}>
        {goal.text}
      </div>
      <div className="flex justify-between mt-2">
        <button
          className="text-xs bg-green-500 text-white px-2 py-1 rounded-lg"
          onClick={() => toggleAchieved(goal.id)}
        >
          {goal.achieved ? "Undo" : "Achieve"}
        </button>
        <button
          className="text-xs bg-red-500 text-white px-2 py-1 rounded-lg"
          onClick={() => deleteGoal(goal.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FloatingGoal;
