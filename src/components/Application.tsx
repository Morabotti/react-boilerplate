import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { ApplicationProviders } from '@components/common';

import '../index.less';

const Application = () => (
  <ApplicationProviders>
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <div>Application</div>
        </Route>
      </Switch>
    </BrowserRouter>
  </ApplicationProviders>
);

export default hot(module)(Application);
