import Header from "../../common/Header";
import Section from "../../common/Section";
import Form from "./Form";
import Buttons from "./Buttons";
import TaskList from "./TaskList";
import { GlobalStyle } from "../../styled";

function Tasks() {
  return (
    <>
      <GlobalStyle />
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
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