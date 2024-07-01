import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import { Home } from '@mui/icons-material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { setDrawerState } from '@/redux/features/app.slice'

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
    icon: <Home />,
    to: '/',
  },
  {
    title: 'О проекте',
    identy: 'about',
    icon: <Home />,
    to: '/about',
  },
]

export default function AppDrawerContent(): JSX.Element {
  const location = useLocation()
  const dispatch = useDispatch<AppDispatch>()

  function closeDrawer(): void {
    dispatch(setDrawerState(false))
  }

  return (
    <>
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
      <Box position="absolute" bottom={0} width="100%">
        <LanguageSelector />
      </Box>
    </>
  )
}
