import NewTask from "./NewTask";

export default function Tasks({ onTaskHandler, clearHandler, projectItem }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onTaskHandler={onTaskHandler} />
      {projectItem.taskList.length > 0 ? (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {projectItem.taskList.map((task) => {
            return (
              <>
                <li key={task.id} className="flex justify-between my-4">
                  <span>{task.title}</span>
                  <button className="text-stone-700 hover: text-red-500" onClick={() => clearHandler(task.id)}>clear</button>
                </li>
              </>
            );
          })}
        </ul>
      ) : (
        <p className="text-stone-800 mb-4">
          The project does not have any task
        </p>
      )}
    </section>
  );
}
