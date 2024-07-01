import { ReduxProvider } from '@/redux/provider'
import { AppLayoutProviderProps } from './AppLayoutProvider.props'
import { ReduxInitProvider } from '../ReduxInitProvider/ReduxInitProvider'
import { AppThemeProvider } from '../AppThemeProvider/AppThemeProvider'
import { AppRouterProvider } from '../AppRouterProvider/RouterProvider'

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
