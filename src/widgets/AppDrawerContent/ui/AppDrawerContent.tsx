import { Box, Divider } from '@mui/material'

import Navigation from '@/features/navigation/ui/Navigation'
import AppLogo from '@/shared/ui/AppLogo/AppLogo'
import VersionDisplay from '@/shared/ui/AppVersion/AppVersion'
import SocialLinks from '@/shared/ui/SocialLinks/SocialLinks'

export default function AppDrawerContent(): JSX.Element {
  return (
    <Box width='100%'>
      <Box
        sx={{
          p: 3,
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <AppLogo />
      </Box>
      <Divider />
      <Navigation />

      <Box
        sx={{
          p: 1,
          width: '100%',
          bottom: 0,
          position: 'absolute',
          textAlign: 'center',
        }}
      >
        <Box>
          <SocialLinks />
        </Box>
        <Box>
          <VersionDisplay />
        </Box>
      </Box>
    </Box>
  )
}
