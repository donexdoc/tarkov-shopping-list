import './styles/App.css'

import { AppLayout } from '@/layouts/AppLayout/AppLayout'

import PageRouter from '../pages/PageRouter/PageRouter'

function App() {
  return (
    <AppLayout>
      <PageRouter />
    </AppLayout>
  )
}

export default App
