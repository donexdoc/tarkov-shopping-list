import '@/App.css'
import { AppLayout } from '@/layouts/AppLayout/AppLayout'
// import PageController from '@/pages/PageController/PageController'
import PageRouter from './pages/PageRouter/PageRouter'

function App() {
  return (
    <AppLayout>
      <PageRouter />
    </AppLayout>
  )
}

export default App
