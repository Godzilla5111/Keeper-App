import React, {
  useState
} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(obj) {
    setNotes(prevValue => {
      return [...prevValue, obj];
    });
  }

  function deleteNote(ind) {
    setNotes(prevValue => {
      return prevValue.filter((value, index) => {
        return index !== ind;
      });
    });
  }

  return ( <
    div >
    <
    Header / >
    <
    CreateArea take = {
      addNote
    }
    /> <
    Note key = {
      1
    }
    title = "Note title"
    content = "Note content" / > {
      notes.map((obj, index) => {
        return ( <
          Note title = {
            obj.title
          }
          content = {
            obj.content
          }
          key = {
            index
          }
          id = {
            index
          }
          toDelete = {
            deleteNote
          }
          />
        );
      })
    } <
    Footer / >
    <
    /div>
  );
}

export default App;
