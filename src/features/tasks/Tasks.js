import Header from "../../common/Header";
import Section from "../../common/Section";
import ExampleTasksButton from "./ExampleTasksButton";
import Form from "./Form";
import Buttons from "./Buttons";
import TaskList from "./TaskList";

function Tasks() {
  return (
    <>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasksButton />}
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />
    </>
  );
}

export default Tasks;