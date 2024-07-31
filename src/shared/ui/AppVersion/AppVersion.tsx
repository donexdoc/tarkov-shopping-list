import { Typography } from '@mui/material'

import { useAppVersion } from '@/shared/lib/hooks/useAppVersion'

const VersionDisplay = (): JSX.Element => {
  const version = useAppVersion()

  return (
    <Typography variant='caption' color='textSecondary'>
      Version: {version}
    </Typography>
  )
}

export default VersionDisplay
