import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import TrackedItems from '@/features/tracker/ui/TrackedItems/ui/TrackedItems'
import SupportProjectWidget from '@/shared/ui/SupportProjectWidget/SupportProjectWidget'
import { SearchWidget } from '@/widgets/SearchWidget'

const MainListPage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <>
      <Box>
        <SupportProjectWidget />
      </Box>
      <Typography
        variant='h5'
        sx={{
          textAlign: {
            md: 'left',
            xs: 'center',
          },
          padding: '10px',
        }}
      >
        {t('MainListPage.mainTitle')}
      </Typography>
      <Box>
        <SearchWidget />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TrackedItems />
      </Box>
    </>
  )
}

export default MainListPage
