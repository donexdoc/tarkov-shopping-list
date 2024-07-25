import { GitHub, YouTube } from '@mui/icons-material'
import { IconButton } from '@mui/material'

interface LinkElement {
  title: string
  identy: string
  icon: JSX.Element
  href: string
}

const socialLinks: LinkElement[] = [
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
]

export default function SocialLinks(): JSX.Element {
  return (
    <>
      {socialLinks.map((link) => (
        <IconButton target='_blank' key={link.identy} href={link.href}>
          {link.icon}
        </IconButton>
      ))}
    </>
  )
}
