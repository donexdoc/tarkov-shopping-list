import { Box, CssBaseline, Toolbar } from '@mui/material'

import { AppLayoutProvider } from '@/app/providers/AppLayoutProvider/AppLayoutProvider'
import { APP_DRAWER_WIDTH } from '@/shared/config/constatnts'
import AppDrawer from '@/widgets/AppDrawer/ui/AppDrawer'
import MainAppBar from '@/widgets/MainAppBar/ui/MainAppBar'

import { AppLayoutProps } from './AppLayout.props'

export const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <AppLayoutProvider>
      <Box display={'flex'} position={'fixed'} m={1} right={0} zIndex={10000}>
        <CssBaseline />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <MainAppBar />
        <Box
          component='nav'
          sx={{ width: { md: APP_DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
          aria-label='mailbox folders'
        >
          <AppDrawer />
        </Box>

        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
            width: { md: `calc(100% - ${APP_DRAWER_WIDTH}px)` },
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </AppLayoutProvider>
  )
}
