import { ReduxProvider } from '@/redux/provider'
import { AppLayoutProviderProps } from './AppLayoutProvider.props'
import { ReduxInitProvider } from '../ReduxInitProvider/ReduxInitProvider'
import { MainThemeProvider } from '../ThemeProvider/MainThemeProvider'

export const AppLayoutProvider = ({ children }: AppLayoutProviderProps) => {
  return (
    <>
      <ReduxProvider>
        <MainThemeProvider>
          <ReduxInitProvider>{children}</ReduxInitProvider>
        </MainThemeProvider>
      </ReduxProvider>
    </>
  )
}
