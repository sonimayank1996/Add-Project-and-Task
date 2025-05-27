import { useContext, useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import { ProjectContext } from "../context/project-context";

export default function NewProject() {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const projCtx = useContext(ProjectContext)

  function saveHandler() {
    const titleValue = title.current.value;
    const descriptionValue = description.current.value;
    const dateValue = date.current.value;
    // validation ...
    if (
      titleValue.trim() === "" ||
      descriptionValue.trim()  === "" ||
      dateValue.trim()  === ""
    ) {
      modal.current.open();
      return;
    }
    projCtx.addProject({
      id: Math.random() * 10 + Math.random() * 10 + Math.random() * 10,
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
      taskList: [],
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 mt-4 mb-4">Invalid Input</h2>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={projCtx.onCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover: bg-stone-950"
              onClick={saveHandler}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          {" "}
          <Input label="Title" type="text" ref={title} />{" "}
          <Input label="Description" type="text" ref={description} />
          <Input label="Due Date" type="date" ref={date} />
        </div>
      </div>
    </>
  );
}
