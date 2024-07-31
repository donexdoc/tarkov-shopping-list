import { Drawer } from '@mui/material'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { setDrawerState } from '@/app/model/app.slice'
import { AppDispatch, useAppSelector } from '@/app/store'
import { APP_DRAWER_WIDTH } from '@/shared/config'
import AppDrawerContent from '@/widgets/AppDrawerContent/ui/AppDrawerContent'

import { IAppDrawerProps } from './AppDrawer.props'

export default function AppDrawer({ window }: IAppDrawerProps): JSX.Element {
  const drawerState = useAppSelector((state) => state.appReducer.drawerState)
  const dispatch = useDispatch<AppDispatch>()

  const drawerClose = () => {
    dispatch(setDrawerState(false))
  }

  const getContainer = useCallback(
    () => (window !== undefined ? window().document.body : undefined),
    [window]
  )

  return (
    <>
      <Drawer
        container={getContainer()}
        variant='temporary'
        open={drawerState}
        onClose={drawerClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: APP_DRAWER_WIDTH,
          },
        }}
      >
        <AppDrawerContent />
      </Drawer>
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: APP_DRAWER_WIDTH,
          },
        }}
      >
        <AppDrawerContent />
      </Drawer>
    </>
  )
}
