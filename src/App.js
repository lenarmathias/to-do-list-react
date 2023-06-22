import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";

const tasks = [
  { id: 1, content: "Przejść na React.js", done: false },
  { id: 2, content: "Zjeść obiad", done: true },
];

const hiddenDoneTasks = false;

function App() {
  return (
    <>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons tasks={tasks} hiddenDoneTasks={hiddenDoneTasks} />}
        body={<Tasks tasks={tasks} hiddenDoneTasks={hiddenDoneTasks} />}
      />
    </>
  );
}

export default App;
