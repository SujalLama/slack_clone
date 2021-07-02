import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Register from './Register'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
        </Switch>
    </BrowserRouter>
)