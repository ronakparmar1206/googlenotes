import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Note(props) {
  const deleteItem = () => {
    props.delete(props.id);
  };
  return (
    <div className="note">
      <h5>{props.title}</h5>
      <br />
      <p> {props.content}</p>
      <div className="btn">
        <button onClick={deleteItem}>
          <DeleteOutlineIcon className="delete" />
        </button>
      </div>
    </div>
  );
}

export default Note;
