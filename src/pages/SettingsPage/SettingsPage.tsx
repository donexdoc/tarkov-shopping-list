import { Box, FormControlLabel, Switch, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import DefaultCategorySelector from '@/features/defaultCategorySelector/ui/DefaultCategorySelector'
import LanguageSelector from '@/features/languageSelector/ui/LanguageSelector'

const SettingsPage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 3 }}>
      <Typography variant='h4' gutterBottom>
        {t('SettingsPage.mainTitle')}
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography variant='h6' gutterBottom>
          {t('SettingsPage.languageTitle')}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <LanguageSelector />
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant='h6' gutterBottom>
          {t('SettingsPage.trackerSettings')}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <FormControlLabel
            disabled
            control={<Switch defaultChecked />}
            label={t('Settings.autoFoundInRaid')}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <FormControlLabel
            disabled
            control={<Switch />}
            label={t('Settings.autoPriceCheck')}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <DefaultCategorySelector />
        </Box>
      </Box>
    </Box>
  )
}

export default SettingsPage
