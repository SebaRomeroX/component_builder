import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { EstilosProvider } from './context/estilosContext.jsx'

createRoot(document.getElementById('root')).render(
    <EstilosProvider>
        <App />
    </EstilosProvider>
)
