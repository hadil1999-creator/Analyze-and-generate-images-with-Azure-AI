import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  const value = 'World';
  const TITLE = 'My Page Title';

  return (
    <div>
      Hello {value}
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
    </div>
  );
}

export default App;
