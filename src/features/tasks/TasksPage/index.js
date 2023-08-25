import Header from "../../../common/Header";
import Section from "../../../common/Section";
import ExampleTasksButton from "./ExampleTasksButton";
import Search from "./Search";
import Form from "./Form";
import Buttons from "./Buttons";
import TaskList from "./TaskList";

const TasksPage = () => (
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
      title="Wyszukiwarka"
      body={<Search />}
    />
    <Section
      title="Lista zadań"
      extraHeaderContent={<Buttons />}
      body={<TaskList />}
    />
  </>
);

export default TasksPage;