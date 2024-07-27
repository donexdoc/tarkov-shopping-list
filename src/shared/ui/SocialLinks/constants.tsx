import { GitHub, YouTube } from '@mui/icons-material'

import Discord from '../icons/Discord/Discord'
import { ILinkElement } from './types'

export const SOCIAL_LINKS: ILinkElement[] = [
  {
    title: 'GitHub',
    identy: 'gitgub',
    icon: <GitHub color='primary' />,
    href: 'https://github.com/donexdoc/tarkov-shopping-list',
  },
  {
    title: 'YouTube',
    identy: 'youtube',
    icon: <YouTube color='primary' />,
    href: 'https://www.youtube.com/@DonExCode',
  },
  {
    title: 'Discord',
    identy: 'discord',
    icon: <Discord color='primary' />,
    href: 'https://discord.gg/TpYWFyf7bX',
  },
]
