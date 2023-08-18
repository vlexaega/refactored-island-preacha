import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';


import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
