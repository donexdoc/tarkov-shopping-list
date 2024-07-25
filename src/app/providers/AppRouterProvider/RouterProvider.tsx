import { BrowserRouter } from 'react-router-dom'

import { AppRouterProviderProps } from './AppRouterProvider.props'

export const AppRouterProvider = ({ children }: AppRouterProviderProps) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
