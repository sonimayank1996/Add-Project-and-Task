import { createContext, useState } from "react";

export const ProjectContext = createContext();

export default function ProjectContextProvider({ children }) {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const [selectedProject, setSelectProject] = useState("");

  function handleStartAddProject() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: null,
      };
    });
  }

  const onTaskHandler = (value) => {
    const projectItem = projectState.projects.find(
      (project) => project.id === selectedProject.id
    );
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

  const onClearHandler = (id) => {
    const projectItem = projectState.projects.find(
      (project) => project.id === selectedProject.id
    );
    const updateItem = projectItem.taskList.filter((task) => {
      return task.id !== id;
    });

    setProjectState((preProject) => {
      return {
        ...preProject,
        projects: preProject.projects.map((ele) => {
          if (ele.id === selectedProject.id) {
            return {
              ...ele,
              taskList: updateItem,
            };
          } else {
            return ele;
          }
        }),
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

  function handleCancel() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: undefined,
      };
    });
  }

  const onSelectProject = (projectSelected) => {
    setSelectProject(projectSelected);
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: projectSelected.id,
      };
    });
  };

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

  const projectContextValue = {
    projectData: projectState,
    taskHandler: onTaskHandler,
    addProject: handleAddProject,
    clearHandler: onClearHandler,
    onCancel: handleCancel,
    onDelete: onDeleteHandler,
    onSelect: onSelectProject,
    onStartAdd: handleStartAddProject,
  };

  return (
    <ProjectContext.Provider value={projectContextValue}>
      {children}
    </ProjectContext.Provider>
  );
}
