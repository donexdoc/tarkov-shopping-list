import { IconButton } from '@mui/material'

import { SOCIAL_LINKS } from './constants'

function SocialLinks(): JSX.Element {
  return (
    <>
      {SOCIAL_LINKS.map((link) => (
        <IconButton target='_blank' key={link.identy} href={link.href}>
          {link.icon}
        </IconButton>
      ))}
    </>
  )
}

export default SocialLinks
