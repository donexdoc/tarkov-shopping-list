import { Grid } from '@mui/material'
import { useAppSelector } from '@/redux/store'
import TrackedItem from './components/TrackedItem/TrackedItem'

const TrackedItems = (): JSX.Element => {
  const trackedItems = useAppSelector(
    (state) => state.shoppingList.trackedItems
  )

  return (
    <Grid container spacing={2} sx={{}}>
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
