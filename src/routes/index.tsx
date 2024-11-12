import About from './about'
import { Blog } from './blog'
import { Home } from './home'
import { Layout } from './layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}
