import '@/shared/config/i18n.ts'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/app/App.tsx'
import * as serviceWorkerRegistration from '@/serviceWorkerRegistration'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

serviceWorkerRegistration.register()
