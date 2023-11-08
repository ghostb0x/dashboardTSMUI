'use client';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import lightTheme from '@/theme/lightTheme';
import darkTheme from '@/theme/darkTheme';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ToggleColorMode({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );
  
  const darkThemeChosen = React.useMemo(
    () => 
      createTheme({
        ...darkTheme
      }),
      [mode],
  )

  const lightThemeChosen = React.useMemo(
    () => 
      createTheme({
        ...lightTheme
      }),
      [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
