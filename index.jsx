import { createRoot } from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact'
import Notfound from './components/Notfound'
import CountryDetail from './components/CountryDetail';
import Home from './components/Home'

const router = createBrowserRouter([
   {
      path:'/',
      element: <App />,//This is the layout that wraps all child routes
      errorElement:<Notfound/>,
      children: [
         {
            path:'/',
            element:<Home />//This is the page shown on visiting
         },
         {
            path: '/contact',
            element: <Contact />,
         },
         {
            path: '/:country',
            element: <CountryDetail/>,
         }
      ]
   },
])

const root = createRoot(document.querySelector('#root'));

root.render(<RouterProvider router={router} />) 