import { useQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import ExampleTasksButton from "./ExampleTasksButton";
import Search from "./Search";
import Form from "./Form";
import Buttons from "./Buttons";
import TaskList from "./TaskList";

const TasksPage = () => {
  const query = useQueryParameter(searchQueryParamName);

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
        title="Wyszukiwarka"
        body={
          <Search
            query={query}
            searchQueryParamName={searchQueryParamName}
          />
        }
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={
          <TaskList
            query={query}
          />
        }
      />
    </>
  )
};

export default TasksPage;