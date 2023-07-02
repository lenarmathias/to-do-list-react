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

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (newTaskContent) => {
    if (newTaskContent === "") {
      return;
    }

    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ])
  };

  return (
    <>
      <Header
        title="Lista zadań"
      />

      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form
            addNewTask={addNewTask}
          />
        }
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />}
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
      />
    </>
  );
}

export default App;