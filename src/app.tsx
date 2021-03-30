import React from 'react';

import ThemeProvider from '@config/theme-provider';
import ReduxProvider from '@config/redux-provider';

import Layout from '@components/layout';
import Home from '@views/home';

const App: React.FC = () => (
  <ReduxProvider>
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
