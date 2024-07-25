import {
  AddTask,
  Code,
  GitHub,
  Language,
  Public,
  VolunteerActivism,
} from '@mui/icons-material'
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import AlertWidget from '@/components/AlertWidget/AlertWidget'

const SupportProjectPage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 3 }}>
      <Typography variant='h4' gutterBottom>
        {t('SupportProjectPage.mainTitle')}
      </Typography>

      <AlertWidget />

      <Typography paragraph>{t('SupportProjectPage.p1')}</Typography>

      <Typography paragraph>{t('SupportProjectPage.p2')}</Typography>

      <Typography paragraph>{t('SupportProjectPage.p3')}</Typography>

      <Box sx={{ mt: 2 }}>
        <Button
          startIcon={<GitHub />}
          href='https://github.com/donexdoc/tarkov-shopping-list'
          target='_blank'
          sx={{ m: 1 }}
        >
          {t('SupportProjectPage.button.sourceCode')}
        </Button>
      </Box>

      <Typography variant='h6' gutterBottom sx={{ mt: 4 }}>
        {t('SupportProjectPage.futureTitle')}
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon>
            <Code color='primary' />
          </ListItemIcon>
          <ListItemText primary={t('SupportProjectPage.futureGoal1')} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Public color='primary' />
          </ListItemIcon>
          <ListItemText primary={t('SupportProjectPage.futureGoal2')} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AddTask color='primary' />
          </ListItemIcon>
          <ListItemText primary={t('SupportProjectPage.futureGoal3')} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Language color='primary' />
          </ListItemIcon>
          <ListItemText primary={t('SupportProjectPage.futureGoal4')} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Code color='primary' />
          </ListItemIcon>
          <ListItemText primary={t('SupportProjectPage.futureGoal5')} />
        </ListItem>
      </List>

      <Typography variant='h6' gutterBottom sx={{ mt: 4 }}>
        {t('SupportProjectPage.supportTitle')}
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Button
          variant='contained'
          startIcon={<VolunteerActivism />}
          href='https://boosty.to/donex'
          target='_blank'
          sx={{ m: 1 }}
        >
          {t('SupportProjectPage.button.support')}
        </Button>
      </Box>

      <Typography sx={{ mt: 4 }} paragraph>
        {t('SupportProjectPage.gratitude')}
      </Typography>
    </Box>
  )
}

export default SupportProjectPage
