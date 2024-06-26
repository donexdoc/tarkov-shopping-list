import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import { TrackedItemsProps } from './TrackedItems.props'
import { Add, Delete, Remove } from '@mui/icons-material'

const TrackedItems = ({ items }: TrackedItemsProps): JSX.Element => {
  return (
    <Grid container spacing={2}>
      {items.map((trackedItem) => (
        <Grid
          key={`addedItem-${trackedItem.item.id}`}
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
        >
          <Card
            sx={{
              display: 'flex',
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
              }}
            >
              <CardContent sx={{ flex: '1 0 auto', paddingBottom: 0 }}>
                <Typography variant="h6" component="h6">
                  {trackedItem.item.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="p"
                >
                  {trackedItem.item.shortName}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="delete" size="small">
                  <Delete fontSize="small" />
                </IconButton>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0px 10px',
                    gap: 1,
                  }}
                >
                  <IconButton aria-label="delete" size="small">
                    <Remove fontSize="small" />
                  </IconButton>
                  <Typography variant="subtitle1">
                    {trackedItem.count}
                  </Typography>
                  <IconButton aria-label="increase" size="small">
                    <Add fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{
                width: 100,
                objectFit: 'contain',
              }}
              image={trackedItem.item.image512pxLink}
              alt={trackedItem.item.name}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default TrackedItems
