import { useContext } from "react";
import Button from "./Button";
import { ProjectContext } from "../context/project-context";

export default function Sidebar() {
  const projectCtx = useContext(ProjectContext);
  
  return (
    <aside className="w-1/3 px-8 py-9 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        YOUR PROJECTS
      </h2>
      <div>
        <Button onClick={projectCtx.onStartAdd}>Add Projects +</Button>
      </div>
      <ul className="mt-8">
        {projectCtx.projectData.projects.map((proj) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";

          if (projectCtx.projectData.selectedProjectId === proj.id) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={proj.id}>
              <button
                onClick={() => projectCtx.onSelect(proj)}
                className={cssClasses}
              >
                {proj.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
