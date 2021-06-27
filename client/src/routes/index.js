import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Home from './Home';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </BrowserRouter>
)