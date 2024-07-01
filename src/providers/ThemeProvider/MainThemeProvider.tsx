import { ThemeProvider } from '@emotion/react'
import { MainThemeProviderProps } from './MainThemeProvider.props'
import { createTheme } from '@mui/material'

const MAIN_THEME = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#97920E',
      dark: '#6f6003',
      light: '#81811e',
      contrastText: '#d8d8be',
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
      secondary: 'rgba(218,176,17,0.8)',
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
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#b8b48f',
        },
      },
    },
  },
})

export const MainThemeProvider = ({ children }: MainThemeProviderProps) => {
  return <ThemeProvider theme={MAIN_THEME}>{children}</ThemeProvider>
}
