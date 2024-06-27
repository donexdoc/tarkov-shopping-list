import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import { Add, Delete, Remove } from '@mui/icons-material'

import { TrackedItemProps } from './TrackedItem.props'
import {
  decreaseItemCount,
  increaseItemCount,
  removeTrackedItem,
  setFoundInRaid,
  unsetFoundInRaid,
} from '@/redux/features/shoppingList.slice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import FoundInRaidButton from '../FoundInRaidButton/FoundInRaidButton'

const TrackedItem = ({ trackedItem }: TrackedItemProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()

  const increaseCounter = () => {
    dispatch(increaseItemCount(trackedItem.item.id))
  }
  const decreaseCounter = () => {
    dispatch(decreaseItemCount(trackedItem.item.id))
  }

  const removeItem = () => {
    dispatch(removeTrackedItem(trackedItem.item.id))
  }

  function toggleInRaid(): void {
    if (trackedItem.foundInRaid) {
      dispatch(unsetFoundInRaid(trackedItem.item.id))
    } else {
      dispatch(setFoundInRaid(trackedItem.item.id))
    }
  }

  return (
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
        <IconButton aria-label="delete" size="small" onClick={removeItem}>
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
          <IconButton
            aria-label="delete"
            size="small"
            onClick={decreaseCounter}
          >
            <Remove fontSize="small" />
          </IconButton>
          <Typography variant="subtitle1">{trackedItem.count}</Typography>
          <IconButton
            aria-label="increase"
            size="small"
            onClick={increaseCounter}
          >
            <Add fontSize="small" />
          </IconButton>
        </Box>
        <FoundInRaidButton
          foundInRaid={trackedItem.foundInRaid}
          onToggle={toggleInRaid}
        />
      </Box>
    </Card>
  )
}

export default TrackedItem
