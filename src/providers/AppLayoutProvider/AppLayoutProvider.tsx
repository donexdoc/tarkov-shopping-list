import { ReduxProvider } from '@/redux/provider'
import { AppLayoutProviderProps } from './AppLayoutProvider.props'

export const AppLayoutProvider = ({ children }: AppLayoutProviderProps) => {
  return (
    <>
      <ReduxProvider>{children}</ReduxProvider>
    </>
  )
}
