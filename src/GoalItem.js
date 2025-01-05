import React from "react";

const GoalItem = ({ goal, toggleAchieved, deleteGoal }) => {
  return (
    <li
      className={`flex items-center justify-between p-3 rounded-lg shadow-md ${
        goal.achieved ? "bg-green-100 line-through" : "bg-gray-100"
      }`}
    >
      <span>{goal.text}</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => toggleAchieved(goal.id)}
          className={`px-3 py-1 rounded-lg ${
            goal.achieved ? "bg-yellow-500 text-white" : "bg-green-500 text-white"
          }`}
        >
          {goal.achieved ? "Undo" : "Achieve"}
        </button>
        <button
          onClick={() => deleteGoal(goal.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default GoalItem;
