import { useContext } from "react";
import Tasks from "./Tasks";
import { ProjectContext } from "../context/project-context";

export default function ProjectDetails() {
  const projectCtx = useContext(ProjectContext);
  const projectItem = projectCtx.projectData.projects.find((e) => e.id === projectCtx.projectData.selectedProjectId);

  return (
    <>
      <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">
              {projectItem.title}
            </h1>
            <button
              className="text-stone-600 hover:text-stone-950"
              onClick={() => projectCtx.onDelete()}
            >
              Delete
            </button>
          </div>
          <p className="mb-4 text-stone-400">{projectItem.date}</p>
          <p className="text-stone-600 whitespace-pre-wrap">
            {projectItem.description}
          </p>
        </header>

        <Tasks
          projectItem={projectItem}
        />
      </div>
    </>
  );
}
