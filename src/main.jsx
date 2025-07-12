import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TaskPage from './pages/TaskPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
  {
    path: "/task",
    element: <TaskPage />,
  }
]);

createRoot(document.getElementById('root')).render( //Inserção do hmtl por meio do JS
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
) // <App /> é um componente que está sendo reinderizado, deve sempre começar com letra maiúscula
