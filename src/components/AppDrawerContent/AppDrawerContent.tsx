import { Box } from '@mui/material'
import LanguageSelector from '../LanguageSelector/LanguageSelector'

export default function AppDrawerContent(): JSX.Element {
  return (
    <>
      <Box position="absolute" bottom={0} width="100%">
        <LanguageSelector />
      </Box>
    </>
  )
}
