import { ReduxProvider } from '@/redux/provider'
import { AppLayoutProviderProps } from './AppLayoutProvider.props'
import { ReduxInitProvider } from '../ReduxInitProvider/ReduxInitProvider'
import { MainThemeProvider } from '../ThemeProvider/MainThemeProvider'
import { AppRouterProvider } from '../AppRouterProvider/RouterProvider'

export const AppLayoutProvider = ({ children }: AppLayoutProviderProps) => {
  return (
    <>
      <ReduxProvider>
        <AppRouterProvider>
          <MainThemeProvider>
            <ReduxInitProvider>{children}</ReduxInitProvider>
          </MainThemeProvider>
        </AppRouterProvider>
      </ReduxProvider>
    </>
  )
}
