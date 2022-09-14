import * as React from 'react'
import { createRoot } from 'react-dom/client'

import { Main } from './pages/Main'
import './index.css'

const rootElement = document.createElement('div')
const root = createRoot(rootElement)

document.body.append(rootElement)

const App = () => (
    <React.StrictMode>
        <Main />
    </React.StrictMode>
)

root.render(<App />)
