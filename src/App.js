import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import NavigationBar from "./core/NavigationBar";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage/index"
import AuthorPage from "./features/author/AuthorPage/index";

const App = () => (
    <HashRouter>
        <NavigationBar />

        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/author">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;