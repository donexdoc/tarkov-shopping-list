import { Dashboard, HandshakeTwoTone } from '@mui/icons-material'

import { INavigationElement } from './types'

export const NAVIGATION_LIST: INavigationElement[] = [
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
