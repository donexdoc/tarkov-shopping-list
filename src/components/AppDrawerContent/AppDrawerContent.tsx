import {
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import { Dashboard, HandshakeTwoTone } from '@mui/icons-material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { setDrawerState } from '@/redux/features/app.slice'
import SocialLinks from './components/SocialLinks/SocialLinks'

interface NavigationElement {
  title: string
  identy: string
  icon: JSX.Element
  to: string
}

const navigationList: NavigationElement[] = [
  {
    title: 'Трекер предметов',
    identy: 'tracker',
    icon: <Dashboard />,
    to: '/',
  },
  {
    title: 'Помощь проекту',
    identy: 'support_project',
    icon: <HandshakeTwoTone />,
    to: '/support_project',
  },
]

export default function AppDrawerContent(): JSX.Element {
  const location = useLocation()
  const dispatch = useDispatch<AppDispatch>()

  function closeDrawer(): void {
    dispatch(setDrawerState(false))
  }

  return (
    <Box width="100%">
      <Box sx={{ p: 3, textAlign: 'left' }}>
        <Typography
          variant="h6"
          component="h1"
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
                <ListItemText primary={navigationElement.title} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </nav>
      <Divider />

      <Box width="100%">
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
