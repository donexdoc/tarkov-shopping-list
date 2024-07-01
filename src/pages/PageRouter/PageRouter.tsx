import MainListPage from '../MainListPage/MainListPage'
import AboutPage from '../AboutPage/AboutPage'
import { Route, Routes } from 'react-router-dom'

const PageRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainListPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default PageRouter
