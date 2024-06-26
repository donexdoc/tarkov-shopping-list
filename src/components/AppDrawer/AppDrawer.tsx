import { Drawer } from '@mui/material'
import { AppDrawerProps } from './AppDrawer.props'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { setDrawerState } from '@/redux/features/app.slice'
import { APP_DRAWER_WIDTH } from '@/store/constatnts'
import AppDrawerContent from '../AppDrawerContent/AppDrawerContent'
import { useCallback } from 'react'

export default function AppDrawer({ window }: AppDrawerProps): JSX.Element {
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
        variant="temporary"
        open={drawerState}
        onClose={drawerClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: APP_DRAWER_WIDTH,
          },
        }}
      >
        <AppDrawerContent />
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
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
