import { AppLayoutProvider } from '@/providers/AppLayoutProvider/AppLayoutProvider'
import { AppLayoutProps } from './AppLayoutProps'

export const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return <AppLayoutProvider>{children}</AppLayoutProvider>
}
