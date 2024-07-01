import { ThemeProvider } from '@emotion/react'
import { AppThemeProviderProps } from './AppThemeProvider.props'
import { createTheme } from '@mui/material'

const MAIN_THEME = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b8b48f',
      dark: '#AF9805',
      light: '#81811e',
      contrastText: '#2A2A2A',
    },
    secondary: {
      main: '#A0522D',
    },
    background: {
      default: '#2A2A2A',
      paper: '#383838',
    },
    text: {
      primary: '#BEA87E',
      secondary: '#C7B056',
      disabled: '#7f7765',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ffa000',
    },
    success: {
      main: '#388e3c',
    },
  },
})
// #C7B056
export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return <ThemeProvider theme={MAIN_THEME}>{children}</ThemeProvider>
}
