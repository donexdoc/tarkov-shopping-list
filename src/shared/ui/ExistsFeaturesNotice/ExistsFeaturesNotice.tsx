import { Alert } from '@mui/material'
import { useTranslation } from 'react-i18next'

const ExistsFeaturesNotice = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Alert severity='warning' sx={{ m: 2 }}>
      {t('ExistsFeaturesNotice.text')}
    </Alert>
  )
}

export default ExistsFeaturesNotice
