import { Add, Delete, Remove } from '@mui/icons-material'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/store'
import {
  decreaseItemCount,
  increaseItemCount,
  removeTrackedItem,
  setFoundInRaid,
  unsetFoundInRaid,
} from '@/entities/shoppingList/slice'

import FoundInRaidButton from '../FoundInRaidButton/FoundInRaidButton'
import { ITrackedItemProps } from './TrackedItem.types'

const TrackedItem = ({ trackedItem }: ITrackedItemProps): JSX.Element => {
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
        display: 'flex',

        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
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
            <Typography variant='h6' component='h6'>
              {trackedItem.item.shortName}
            </Typography>
            <Typography
              variant='subtitle2'
              color='text.secondary'
              component='p'
            >
              {trackedItem.item.name}
            </Typography>
          </CardContent>
        </Box>

        <CardMedia
          component='img'
          sx={{
            maxWidth: 100,
            maxHeight: 100,
            objectFit: 'contain',
            m: 1,
            border: '2px solid #535C5F',
            backgroundColor: '#23323B',
            borderRadius: '3px',
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
          mt: 'auto',
        }}
      >
        <IconButton aria-label='delete' size='small' onClick={removeItem}>
          <Delete fontSize='small' color='primary' />
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
            aria-label='delete'
            size='small'
            onClick={decreaseCounter}
          >
            <Remove fontSize='small' color='primary' />
          </IconButton>
          <Typography variant='subtitle1'>{trackedItem.count}</Typography>
          <IconButton
            aria-label='increase'
            size='small'
            onClick={increaseCounter}
          >
            <Add fontSize='small' color='primary' />
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
