import { FormControlLabel, Switch } from '@mui/material'
import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { AppDispatch, useAppSelector } from '@/app/store'
import { setAutoFoundInRaid } from '@/entities/trackerSettings/slice'

const AutoInRaidSwitch = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()
  const { t } = useTranslation()

  const autoFoundInRaid = useAppSelector(
    (store) => store.trackerSettingsReducer.autoFoundInRaid
  )

  function changeSwitch(
    _event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ): void {
    dispatch(setAutoFoundInRaid(checked))
  }

  return (
    <FormControlLabel
      control={<Switch onChange={changeSwitch} checked={autoFoundInRaid} />}
      label={t('Settings.autoFoundInRaid')}
    />
  )
}

export default AutoInRaidSwitch
