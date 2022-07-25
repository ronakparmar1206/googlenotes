import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

import Note from "./Note";
import CreateNote from "./CreateNote";
import { useState } from "react";

function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevD) => {
      return [...prevD, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((prevD) => {
      return prevD.filter((currElem, index) => {
        return index !== id ? <Note /> : "";
      });
    });
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            delete={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
