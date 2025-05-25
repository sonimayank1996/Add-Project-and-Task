import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectImage} alt="noproject" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 mt-4 mb-4">
        No Project Selection
      </h2>
      <p className="text-stone-400 mb-4">Select a project or get Start a New One</p>
      <p className="">
        <Button onClick={onStartAddProject}>
          Create New Project
        </Button>
      </p>
    </div>
  );
}
