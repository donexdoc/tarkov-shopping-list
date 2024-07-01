import { Box, Grid, Typography } from '@mui/material'
import { useAppSelector } from '@/redux/store'
import TrackedItem from './components/TrackedItem/TrackedItem'
import { PlaylistAdd } from '@mui/icons-material'

const TrackedItems = (): JSX.Element => {
  const trackedItems = useAppSelector(
    (state) => state.shoppingList.trackedItems
  )

  if (trackedItems.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50vh',
          textAlign: 'center',
        }}
      >
        <PlaylistAdd sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h6" color="text.secondary">
          Пока что тут пусто
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Добавьте предметы для отслеживания, чтобы увидеть их здесь
        </Typography>
      </Box>
    )
  }

  return (
    <Grid container spacing={2}>
      {trackedItems.map((trackedItem) => (
        <Grid
          key={`addedItem-${trackedItem.item.id}`}
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
        >
          <TrackedItem trackedItem={trackedItem} />
        </Grid>
      ))}
    </Grid>
  )
}

export default TrackedItems
