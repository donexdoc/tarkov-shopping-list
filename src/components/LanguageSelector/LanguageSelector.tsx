import { setLanguage } from '@/redux/features/app.slice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { LANGUAGES } from '@/store/constatnts'
import { Translate } from '@mui/icons-material'
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

const LanguageSelector = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()
  const language = useAppSelector((store) => store.appReducer.language)
  const { i18n } = useTranslation()

  const changeLanguage = (event: SelectChangeEvent<LANGUAGES>) => {
    const newLanguage = event.target.value as LANGUAGES
    dispatch(setLanguage(newLanguage))
  }

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])
  return (
    <Box sx={{ p: 1, mt: 1, width: '100%' }}>
      <FormControl fullWidth>
        <InputLabel id="language-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={language}
          onChange={changeLanguage}
          label="Language"
          startAdornment={<Translate sx={{ mr: 1, ml: -0.5 }} />}
        >
          {Object.values(LANGUAGES).map((value) => (
            <MenuItem key={`lang_${value}`} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default LanguageSelector
