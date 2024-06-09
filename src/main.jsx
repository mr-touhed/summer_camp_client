import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'
import AuthContext from './AuthContext/AuthContext'
import {
    QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthContext>
        <div className='max-w-screen-2xl mx-auto'>
        <RouterProvider router={router}/>
        </div>
    </AuthContext>
    </QueryClientProvider>
  </React.StrictMode>,
)
