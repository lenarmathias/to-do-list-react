import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index"
import Author from "./features/author/Author";
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
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/author">
                <Author />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;