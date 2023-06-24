import { useState } from "react";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";



function App() {
  const [hideDone, sethideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejść na React.js", done: false },
    { id: 2, content: "Zjeść obiad", done: true },
  ]);

  const toggleHideDone = () => {
    sethideDone(hideDone => !hideDone);
  };

  return (
    <>
      <Header
        title="Lista zadań"
      />

      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form />
        }
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />}
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
          />}
      />
    </>
  );
}

export default App;
