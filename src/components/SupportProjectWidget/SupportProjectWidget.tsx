import { VolunteerActivism } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Link as RouterLink } from 'react-router-dom'

const SupportProjectWidget = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Button
      component={RouterLink}
      color="primary"
      to="/support_project"
      sx={{ padding: '5px', width: '100%' }}
      startIcon={<VolunteerActivism />}
      size="small"
    >
      {t('SupportProjectWidget.button')}
    </Button>
  )
}

export default SupportProjectWidget
