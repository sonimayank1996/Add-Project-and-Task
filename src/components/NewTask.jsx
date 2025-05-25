import { useState } from "react";

export default function NewTask({onTaskHandler}) {
  const [enterTask, setEnterTask] = useState('');

  function handleChange(e) {
    setEnterTask(e.target.value);
  }

  function onAddTask() {
    onTaskHandler(enterTask);
    setEnterTask('')
  }
  return (
    <div className="flex items-center gap-4">
      <input
        value={enterTask}
        onChange={handleChange}
        type="text"
        className="w-64 px-2 py-1 rounded-sm"
      />
      <button
        onClick={onAddTask}
        className="text-stone-700 hover: text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
