import './styles/App.css'

import { AppLayout } from '@/layouts/AppLayout/AppLayout'
import PageRouter from '@/processes/routing/ui/PageRouter'

function App() {
  return (
    <AppLayout>
      <PageRouter />
    </AppLayout>
  )
}

export default App
