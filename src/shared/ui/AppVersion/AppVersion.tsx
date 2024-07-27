import { Typography } from '@mui/material'
import React from 'react'

import { useAppVersion } from '@/shared/lib/hooks/useAppVersion'

const VersionDisplay: React.FC = () => {
  const version = useAppVersion()

  return (
    <Typography variant='caption' color='textSecondary'>
      Version: {version}
    </Typography>
  )
}

export default VersionDisplay
