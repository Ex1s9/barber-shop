import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import s from "./app/style/style.module.scss"

createRoot(document.getElementById('root')!).render(
  <div className={s.App}>
    <App />
  </div>
)
