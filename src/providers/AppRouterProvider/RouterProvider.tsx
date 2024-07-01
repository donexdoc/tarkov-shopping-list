import { AppRouterProviderProps } from './AppRouterProvider.props'
import { BrowserRouter } from 'react-router-dom'

export const AppRouterProvider = ({ children }: AppRouterProviderProps) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
