import { Alert } from '@mui/material'
import { useTranslation } from 'react-i18next'

const AlertWidget = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Alert severity='warning' sx={{ m: 2 }}>
      {t('SupportAlert.text')}
    </Alert>
  )
}

export default AlertWidget
