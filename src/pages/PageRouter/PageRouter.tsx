import MainListPage from '../MainListPage/MainListPage'
import SupportProjectPage from '../SupportProjectPage/SupportProjectPage'
import { Route, Routes } from 'react-router-dom'

const PageRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainListPage />} />
      <Route path="/support_project" element={<SupportProjectPage />} />
    </Routes>
  )
}

export default PageRouter
