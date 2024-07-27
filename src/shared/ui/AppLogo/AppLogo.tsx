import { Typography } from '@mui/material'

import logoImage from '@/shared/assets/logo.png'

const AppLogo = (): JSX.Element => {
  return (
    <>
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
    </>
  )
}

export default AppLogo
