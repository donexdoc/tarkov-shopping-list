import { Translate } from '@mui/icons-material'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { setLanguage } from '@/app/model/app.slice'
import { AppDispatch, useAppSelector } from '@/app/store'
import { LANGUAGES } from '@/shared/config/constatnts'
import { ILanguage } from '@/shared/types/language'

const LanguageSelector = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()
  const languageCode = useAppSelector((store) => store.appReducer.language.code)
  const { i18n } = useTranslation()

  const changeLanguage = (event: SelectChangeEvent<ILanguage['code']>) => {
    const newLanguageCode = event.target.value as ILanguage['code']
    LANGUAGES.forEach((language) => {
      if (language.code === newLanguageCode) {
        dispatch(setLanguage(language))
      }
    })
  }

  useEffect(() => {
    i18n.changeLanguage(languageCode)
  }, [languageCode, i18n])

  return (
    <FormControl fullWidth>
      <InputLabel id='language-select-label'>Language</InputLabel>
      <Select
        labelId='language-select-label'
        id='language-select'
        value={languageCode}
        onChange={changeLanguage}
        label='Language'
        startAdornment={<Translate sx={{ mr: 1, ml: -0.5 }} />}
      >
        {Object.values(LANGUAGES).map((value) => (
          <MenuItem key={`lang_${value.code}`} value={value.code}>
            {value.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default LanguageSelector
