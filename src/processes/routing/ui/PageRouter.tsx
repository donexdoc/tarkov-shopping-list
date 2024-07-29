import { Route, Routes } from 'react-router-dom'

import MainListPage from '@/pages/MainListPage/MainListPage'
import SettingsPage from '@/pages/SettingsPage/SettingsPage'
import SupportProjectPage from '@/pages/SupportProjectPage/SupportProjectPage'

const PageRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<MainListPage />} />
      <Route path='/support_project' element={<SupportProjectPage />} />
      <Route path='/settings' element={<SettingsPage />} />
    </Routes>
  )
}

export default PageRouter
