import React from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function Todo({ todo, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          {/* Edit */}
          <GrEdit id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          {/* Delete */}
          <RiDeleteBin6Line id="i" />
        </button>
      </div>
    </div>
  );
}