import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Cards from './components/Cards';

function App() {
  const [notes, setNotes] = useState([]);
  const boardRef = useRef(null);

  // Add Note
  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      desc: "New Note",
      filesize: "1.2MB",
      close: false,
      tag: { isopen: true, title: "Personal" },
    };
    setNotes([...notes, newNote]);
  };

  // Update Note Text
  const updateNote = (id, newDesc) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, desc: newDesc } : note
    ));
  };

  // Delete Note
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-zinc-900 p-10 text-white">
      <button
        onClick={addNote}
        className="mb-6 bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
      >
        ➕ Add Note
      </button>

      <div
        ref={boardRef}
        className="flex flex-wrap gap-5 relative w-full min-h-[80vh] border border-dashed border-gray-500 p-4 rounded-lg"
      >
        {notes.map(note => (
          
          <Cards
            key={note.id}
            data={note}
            reference={boardRef}
            onDelete={() => deleteNote(note.id)}
            onUpdate={(newDesc) => updateNote(note.id, newDesc)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
