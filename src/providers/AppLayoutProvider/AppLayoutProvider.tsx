import { ReduxProvider } from '@/redux/provider'
import { AppLayoutProviderProps } from './AppLayoutProvider.props'
import { ReduxInitProvider } from '../ReduxInitProvider/ReduxInitProvider'

export const AppLayoutProvider = ({ children }: AppLayoutProviderProps) => {
  return (
    <>
      <ReduxProvider>
        <ReduxInitProvider>{children}</ReduxInitProvider>
      </ReduxProvider>
    </>
  )
}
