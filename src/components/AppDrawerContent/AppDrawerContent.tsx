import { Dashboard, HandshakeTwoTone } from '@mui/icons-material'
import {
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link as RouterLink, useLocation } from 'react-router-dom'

import { setDrawerState } from '@/app/model/app.slice'
import { AppDispatch } from '@/app/store'
import logoImage from '@/shared/assets/logo.png'

import LanguageSelector from '../LanguageSelector/LanguageSelector'
import SocialLinks from './components/SocialLinks/SocialLinks'

interface NavigationElement {
  title: string
  identy: string
  icon: JSX.Element
  to: string
}

const navigationList: NavigationElement[] = [
  {
    title: 'AppDrawerContent.navigation.tracker',
    identy: 'tracker',
    icon: <Dashboard color='primary' />,
    to: '/',
  },
  {
    title: 'AppDrawerContent.navigation.supportProject',
    identy: 'support_project',
    icon: <HandshakeTwoTone color='primary' />,
    to: '/support_project',
  },
]

export default function AppDrawerContent(): JSX.Element {
  const { t } = useTranslation()
  const location = useLocation()
  const dispatch = useDispatch<AppDispatch>()

  function closeDrawer(): void {
    dispatch(setDrawerState(false))
  }

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
        <img
          src={logoImage}
          alt='logo image'
          style={{
            maxWidth: '80%',
            alignSelf: 'center',
            WebkitFilter: 'drop-shadow(0px 0px 10px #343e4c)',
            filter: 'drop-shadow(0px 0px 10px #343e4c)',
          }}
        />
        <Typography
          variant='h6'
          component='h1'
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          Tarkov Shopping List
        </Typography>
      </Box>
      <Divider />
      <nav>
        {navigationList.map((navigationElement) => {
          return (
            <ListItem key={navigationElement.identy} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={navigationElement.to}
                selected={location.pathname === navigationElement.to}
                onClick={closeDrawer}
              >
                <ListItemIcon>{navigationElement.icon}</ListItemIcon>
                <ListItemText primary={t(navigationElement.title)} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </nav>
      <Divider />

      <Box width='100%'>
        <LanguageSelector />
      </Box>

      <Box
        sx={{
          p: 1,
          width: '100%',
          bottom: 0,
          position: 'absolute',
          textAlign: 'center',
        }}
      >
        <SocialLinks />
      </Box>
    </Box>
  )
}
