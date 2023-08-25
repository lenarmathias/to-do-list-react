import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage/index"
import AuthorPage from "./features/author/AuthorPage/index";
import { NavigationBar, NavigationItem, NavigationWrapper, StyledNavigationLink } from "./styled";

const App = () => (
    <HashRouter>
        <NavigationBar>
            <NavigationWrapper>
                <NavigationItem>
                    <StyledNavigationLink to="/zadania">
                        Zadania
                    </StyledNavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <StyledNavigationLink to="/author">
                        O autorze
                    </StyledNavigationLink>
                </NavigationItem>
            </NavigationWrapper>
        </NavigationBar>

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