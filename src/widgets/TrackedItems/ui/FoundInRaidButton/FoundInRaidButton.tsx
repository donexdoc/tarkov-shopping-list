import { TaskAlt } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import { IFoundInRaidButtonProps } from './FoundInRaidButton.types'

const FoundInRaidButton = ({
  foundInRaid,
  onToggle,
}: IFoundInRaidButtonProps): JSX.Element => {
  return (
    <IconButton
      size='small'
      sx={{
        marginLeft: 'auto',
        filter: !foundInRaid
          ? 'brightness(0) saturate(100%) invert(80%) sepia(0%) saturate(1%) hue-rotate(204deg) brightness(97%) contrast(92%)'
          : 'brightness(0) saturate(100%) invert(70%) sepia(84%) saturate(301%) hue-rotate(358deg) brightness(103%) contrast(107%)',
        '&:hover': {
          filter: !foundInRaid
            ? ''
            : 'brightness(0) saturate(100%) invert(70%) sepia(84%) saturate(541%) hue-rotate(358deg) brightness(103%) contrast(107%)',
        },
      }}
      onClick={onToggle}
    >
      <TaskAlt
        sx={{
          width: '18px',
          height: '18px',
        }}
      />
    </IconButton>
  )
}

export default FoundInRaidButton
