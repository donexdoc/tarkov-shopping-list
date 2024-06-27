import { IconButton } from '@mui/material'

import questIcon from '@/assets/icons/handbook/icon_quest.png'
import { FoundInRaidButtonProps } from './FoundInRaidButton.props'

const FoundInRaidButton = ({
  foundInRaid,
  onToggle,
}: FoundInRaidButtonProps): JSX.Element => {
  return (
    <IconButton
      size="small"
      sx={{
        marginLeft: 'auto',
        filter: foundInRaid
          ? 'brightness(0) saturate(100%) invert(80%) sepia(0%) saturate(1%) hue-rotate(204deg) brightness(97%) contrast(92%)'
          : 'brightness(0) saturate(100%) invert(70%) sepia(84%) saturate(301%) hue-rotate(358deg) brightness(103%) contrast(107%)',
        '&:hover': {
          filter:
            'brightness(0) saturate(100%) invert(70%) sepia(84%) saturate(541%) hue-rotate(358deg) brightness(103%) contrast(107%)',
        },
      }}
      onClick={onToggle}
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
  )
}

export default FoundInRaidButton
