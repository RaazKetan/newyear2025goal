import React, { useState, useEffect, useRef } from "react";
import GoalInput from "./GoalInput";
import FloatingGoal from "./FloatingGoal";

const App = () => {
  const [goals, setGoals] = useState(() => {
    return JSON.parse(localStorage.getItem("goals")) || [];
  });

  const inputFormRef = useRef();

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = (goal) => {
    setGoals([...goals, { id: Date.now(), text: goal, achieved: false }]);
  };

  const toggleAchieved = (id) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, achieved: !goal.achieved } : goal
    ));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#34d399] to-[#164e63] text-white p-5 relative overflow-hidden">
      <div
        className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-5 z-50 relative"
        ref={inputFormRef}
      >
        <h1 className="text-3xl font-bold text-center mb-5 text-[#171717]">🎉 New Year 2025 Goals 🎯</h1>
        <GoalInput addGoal={addGoal} />
      </div>

      {goals.map(goal => (
        <FloatingGoal
          key={goal.id}
          goal={goal}
          toggleAchieved={toggleAchieved}
          deleteGoal={deleteGoal}
          avoidArea={inputFormRef.current?.getBoundingClientRect()}
        />
      ))}
    </div>
  );
};

export default App;
