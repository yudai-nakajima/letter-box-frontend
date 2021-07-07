import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MessagePage from './components/pages/MessagePage';
import NotFound from './components/pages/NotFound';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <MessagePage />
      </Route>
      <Route path="/message/:storeId">
        <MessagePage />
      </Route>
      <Route path="/message/:storeId/:employeeId">
        <MessagePage />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
