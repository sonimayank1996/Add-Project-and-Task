import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { ProjectContext } from "./context/project-context.jsx";
import { useContext } from "react";

function App() {
  const projectCtx = useContext(ProjectContext);
  let content = <ProjectDetails />;
  
  if (projectCtx.projectData.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectCtx.projectData.selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  }

  return (
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        {content}
      </main>
  );
}

export default App;
