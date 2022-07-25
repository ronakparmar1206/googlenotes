import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import "./header.css";
function CreateNote(props) {
  const [expand, setexpand] = useState(false);
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    if (event.keyCode === "Enter") {
      console.log(event.keyCode);
    }
    const { name, value } = event.target;
    setnote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  };
  console.log(note);
  const addEvent = () => {
    props.passNote(note);
    setnote({
      title: "",
      content: "",
    });
  };
  const expandIt = () => {
    setexpand(true);
  };
  const normal = () => {
    setexpand(false);
  };
  return (
    <>
      <div className="main" onDoubleClick={normal}>
        <form className="sub" autoComplete="on">
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              required
            />
          ) : null}
          <textarea
            value={note.content}
            name="content"
            rows="10"
            required
            onChange={InputEvent}
            column="5"
            autoComplete="off"
            placeholder="Write a note.."
            onClick={expandIt}
            onDoubleClick={normal}
          />
          {expand ? (
            <Button onClick={addEvent}>
              <AddIcon className="add" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
}

export default CreateNote;
