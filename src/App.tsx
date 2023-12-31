import React from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import { Box } from "@mui/material";
import Notes from "./components/Notes";
import { useEffect, useState } from "react";
import { NoteObject } from "./models/note";

function App() {
  const [notes, setNotes] = useState<NoteObject[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem("notes")) {
      setNotes(JSON.parse(sessionStorage.getItem("notes") as string));
    }
  }, []);

  const addNotes = (note: NoteObject) => {
    setNotes([note, ...notes]);
    sessionStorage.setItem("notes", JSON.stringify([note, ...notes]));
  };

  const deleteNote = (id: number) => {
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
    sessionStorage.setItem("notes", JSON.stringify(updateNotes));
  };
  return (
    <div>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote addNotes={addNotes} />
        <Notes notes={notes} deleteNote={deleteNote} />
      </Box>
    </div>
  );
}

export default App;
