import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link as RouterLink, useLocation } from 'react-router-dom'

import { setDrawerState } from '@/app/model/app.slice'
import { AppDispatch } from '@/app/store'

import { NAVIGATION_LIST } from '../model/constants'

const Navigation: React.FC = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const dispatch = useDispatch<AppDispatch>()

  function closeDrawer(): void {
    dispatch(setDrawerState(false))
  }

  return (
    <nav>
      {NAVIGATION_LIST.map((navigationElement) => (
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
      ))}
    </nav>
  )
}

export default Navigation
