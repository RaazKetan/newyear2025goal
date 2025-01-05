import React, { useState } from "react";

const GoalInput = ({ addGoal }) => {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!goal.trim()) return;
    addGoal(goal);
    setGoal("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        className="flex-grow px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#155e75] text-[#4f46e5]"
        placeholder="Add your goal..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button type="submit" className="px-4 py-2 bg-[#155e75] text-white rounded-lg hover:bg-[#155e75]">
        Add
      </button>
    </form>
  );
};

export default GoalInput;
