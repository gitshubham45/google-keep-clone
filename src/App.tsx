import React from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NotesGrid from './components/NotesGrid';

function App() {
  return (
    <div className="App">
      <NoteForm />
      <NotesGrid />
    </div>
  );
}

export default App;
