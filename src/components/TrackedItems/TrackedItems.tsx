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
import questIcon from '@/assets/icons/handbook/icon_quest.png'

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
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
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
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1,
                pr: 1,
                pt: 0,
              }}
            >
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
                <Typography variant="subtitle1">{trackedItem.count}</Typography>
                <IconButton aria-label="increase" size="small">
                  <Add fontSize="small" />
                </IconButton>
              </Box>
              <IconButton
                size="small"
                sx={{
                  marginLeft: 'auto',
                  filter:
                    'brightness(0) saturate(100%) invert(70%) sepia(84%) saturate(301%) hue-rotate(358deg) brightness(103%) contrast(107%)',
                  '&:hover': {
                    filter:
                      'brightness(0) saturate(100%) invert(70%) sepia(84%) saturate(541%) hue-rotate(358deg) brightness(103%) contrast(107%)',
                  },
                }}
              >
                <img
                  src={questIcon}
                  alt="found in raid"
                  style={{
                    width: '18px',
                    height: '18px',
                  }}
                />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  marginLeft: 'auto',

                  filter:
                    'brightness(0) saturate(100%) invert(80%) sepia(0%) saturate(1%) hue-rotate(204deg) brightness(97%) contrast(92%)',
                  '&:hover': {
                    filter:
                      'brightness(0) saturate(100%) invert(70%) sepia(84%) saturate(541%) hue-rotate(358deg) brightness(103%) contrast(107%)',
                  },
                }}
              >
                <img
                  src={questIcon}
                  alt="found in raid"
                  style={{
                    width: '18px',
                    height: '18px',
                  }}
                />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default TrackedItems
