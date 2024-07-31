import {
  Box,
  FormControlLabel,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import AutoInRaidSwitch from '@/features/settings/ui/AutoInRaidSwitch/AutoInRaidSwitch'
import DefaultCategorySelector from '@/features/settings/ui/DefaultCategorySelector/DefaultCategorySelector'
import LanguageSelector from '@/features/settings/ui/LanguageSelector/LanguageSelector'

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
          <AutoInRaidSwitch />
        </Box>
        <Tooltip title={t('App.featureInDevelop')} placement='top'>
          <Box sx={{ mt: 2 }}>
            <FormControlLabel
              disabled
              control={<Switch />}
              label={t('Settings.autoPriceCheck')}
            />
          </Box>
        </Tooltip>
        <Tooltip title={t('App.featureInDevelop')} placement='top'>
          <Box sx={{ mt: 2 }}>
            <DefaultCategorySelector />
          </Box>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default SettingsPage
