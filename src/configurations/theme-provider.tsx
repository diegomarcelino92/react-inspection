import React, { createContext, useState } from 'react';

import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { GlobalStyles } from './global-styles';

const pallets = {
  light: {
    primary: '#006eba',
    secondary: '#008a00',
  },
  dark: {
    primary: '#006eba',
    secondary: '#008a00',
  },
};

const theme = (palleteType: PalleteType): DefaultTheme => ({
  colors: {
    palleteType,
    ...pallets[palleteType],
  },
});

interface ThemeContextProps {
  themeMode: PalleteType;
  changeTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  themeMode: 'light',
  changeTheme: () => {},
});

const ThemeProvider: React.FC = ({ children }) => {
  const [themeMode, setThemeMode] = useState<PalleteType>('light');

  function changeTheme() {
    setThemeMode((old) => (old === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ themeMode, changeTheme }}>
      <StyledThemeProvider theme={theme(themeMode)}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
