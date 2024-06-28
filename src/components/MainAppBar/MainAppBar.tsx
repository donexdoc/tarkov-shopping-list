import { toggleDrawerState } from '@/redux/features/app.slice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { APP_DRAWER_WIDTH } from '@/store/constatnts'
import { Menu } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'

export default function MainAppBar(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>()
  const appTitleState = useAppSelector((state) => state.appReducer.appTitle)

  function drawerOpen(): void {
    dispatch(toggleDrawerState())
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${APP_DRAWER_WIDTH}px)` },
        ml: { md: `${APP_DRAWER_WIDTH}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={drawerOpen}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {appTitleState}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
