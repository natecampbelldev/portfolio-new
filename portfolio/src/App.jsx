import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'


const router = createBrowserRouter([{
  path: '/',
  Component: RootLayout,
  children: [
    {
      index:true,
      Component: Home,
    }
  ]
}]);

export default function App() {
  return <RouterProvider router={router} />
}