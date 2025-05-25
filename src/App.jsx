import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const [activeNewProject, setActiveNewProject] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [selectedProject, setSelectProject] = useState("");

  function handleStartAddProject() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: null,
      };
    });
  }

  const handleAddProject = (newProjectData) => {
    const newProject = { ...newProjectData };
    setProjectState((preProject) => {
      return {
        ...preProject,
        projects: [...preProject.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  };

  const onSelectProject = (projectSelected) => {
    setSelectProject(projectSelected);
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: projectSelected.id,
      };
    });
  };

  function onDeleteHandler() {
    setProjectState((preProject) => {
      return {
        ...preProject,
        selectedProjectId: undefined,
        projects: preProject.projects.filter(
          (project) => project.id !== preProject.selectedProjectId
        ),
      };
    });
  }
  const onClearHandler = (id) => {
    const projectItem = projectState.projects.find(
      (project) => project.id === selectedProject.id
    );
    const updateItem = projectItem.taskList.filter((task) => {
      return task.id !== id;
    });
    console.log({ updateItem });
    
    setProjectState((preProject) => {
      return {
        ...preProject,
        projects: preProject.projects.map((ele) => {
          if (ele.id === selectedProject.id) {
            return {
              ...ele,
              taskList: updateItem
            };
          } else {
            return ele;
          }
        }),
      };
    });
  };

  function handleCancel() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: undefined,
      };
    });
  }

  const onTaskHandler = (value) => {
    const projectItem = projectState.projects.find(
      (project) => project.id === selectedProject.id
    );
    console.log({ projectItem });
    const updatedProject = {
      ...projectItem,
      taskList: [
        ...projectItem.taskList,
        {
          id: Math.random() * 10,
          title: value,
        },
      ],
    };
    console.log({ updatedProject });
    setProjectState((project) => {
      return {
        ...project,
        projects: project.projects.map((ele) => {
          if (ele.id === selectedProject.id) {
            return updatedProject;
          } else {
            return ele;
          }
        }),
      };
    });
  };
  let content = (
    <ProjectDetails
      selectedProjectId={projectState.selectedProjectId}
      projectList={projectState.projects}
      deleteHandler={onDeleteHandler}
      onTaskHandler={onTaskHandler}
      clearHandler={onClearHandler}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        activeNewProject={activeNewProject}
        onAdd={handleAddProject}
        onCancel={handleCancel}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  console.log({ projectState });

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projectList={projectState.projects}
        selectProject={onSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
