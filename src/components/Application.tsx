import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { ApplicationProviders } from '@components/common';
import { MainView } from '@components/main';

import '../index.less';

const Application = () => (
  <ApplicationProviders>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainView />} />
      </Routes>
    </BrowserRouter>
  </ApplicationProviders>
);

export default hot(module)(Application);
