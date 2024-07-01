import { VolunteerActivism } from '@mui/icons-material'
import { Button } from '@mui/material'

import { Link as RouterLink } from 'react-router-dom'

const SupportProjectWidget = (): JSX.Element => {
  return (
    <Button
      component={RouterLink}
      color="primary"
      to="/support_project"
      sx={{ padding: '5px', width: '100%' }}
      startIcon={<VolunteerActivism />}
      size="small"
    >
      Поддержать проект
    </Button>
  )
}

export default SupportProjectWidget
