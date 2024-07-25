import { AppRouterProvider } from '../AppRouterProvider/RouterProvider'
import { AppThemeProvider } from '../AppThemeProvider/AppThemeProvider'
import { ReduxInitProvider } from '../ReduxInitProvider/ReduxInitProvider'
import { ReduxProvider } from '../ReduxProvider/ReduxProvider'
import { AppLayoutProviderProps } from './AppLayoutProvider.props'

export const AppLayoutProvider = ({ children }: AppLayoutProviderProps) => {
  return (
    <>
      <ReduxProvider>
        <AppRouterProvider>
          <AppThemeProvider>
            <ReduxInitProvider>{children}</ReduxInitProvider>
          </AppThemeProvider>
        </AppRouterProvider>
      </ReduxProvider>
    </>
  )
}
