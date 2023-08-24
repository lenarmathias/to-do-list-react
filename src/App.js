import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/Tasks"
import Author from "./features/author/Author";

const App = () => (
    <HashRouter>
        <nav>
            <li>
                <Link to="/zadania">
                    Zadania
                </Link>
            </li>
            <li>
                <Link to="/author">
                    O autorze
                </Link>
            </li>
        </nav>

        <Switch>
            <Route path="/zadania">
                <Tasks />
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