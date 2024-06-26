import { setLanguage } from '@/redux/features/app.slice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { LANGUAGES } from '@/store/constatnts'
import { Translate } from '@mui/icons-material'
import { Box, Button, Menu, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

const LanguageSelector = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()
  const language = useAppSelector((store) => store.appReducer.language)
  const { i18n } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const changeLanguage = (newLanguage: LANGUAGES) => {
    dispatch(setLanguage(newLanguage))

    handleCloseSelect()
  }

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])

  const handleCloseSelect = () => {
    setAnchorEl(null)
  }

  const handleButtonSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <Box sx={{ padding: '5px' }}>
      <Button
        onClick={handleButtonSelect}
        variant="outlined"
        aria-haspopup
        sx={{ width: '100%' }}
        startIcon={<Translate />}
      >
        {language}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseSelect}
      >
        {Object.values(LANGUAGES).map((value) => (
          <MenuItem key={`lang_${value}`} onClick={() => changeLanguage(value)}>
            {value}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default LanguageSelector
