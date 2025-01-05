import React from "react";
import GoalItem from "./GoalItem";

const GoalList = ({ goals, toggleAchieved, deleteGoal }) => {
  if (goals.length === 0) {
    return <p className="text-center text-gray-500">No goals yet! Add your first goal 🎉</p>;
  }

  return (
    <ul className="space-y-3">
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          toggleAchieved={toggleAchieved}
          deleteGoal={deleteGoal}
        />
      ))}
    </ul>
  );
};

export default GoalList;
