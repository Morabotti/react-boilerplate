import * as ReactDOM from 'react-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Application from '@components/Application';

const mount = document.getElementById('mount');
const render = () => {
  if (!mount) {
    console.error('No mountpoint found!');
    return;
  }

  ReactDOM.render(<Application />, mount);
};

render();

if (module.hot) {
  module.hot.accept('./components/Application', render);
}
