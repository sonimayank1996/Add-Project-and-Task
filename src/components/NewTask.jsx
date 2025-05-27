import { useContext, useState } from "react";
import { ProjectContext } from "../context/project-context";

export default function NewTask() {
  const [enterTask, setEnterTask] = useState('');
  const projectCtx = useContext(ProjectContext);
  
  function handleChange(e) {
    setEnterTask(e.target.value);
  }

  function onAddTask() {
    projectCtx.taskHandler(enterTask);
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
