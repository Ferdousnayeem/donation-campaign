import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import Donation from './components/Donation/Donation.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import DonationDetails from './components/DonationDetails/DonationDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donation',
        loader: ()=> fetch('/public/data.json'),
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        loader: ()=> fetch('/public/data.json'),
        element: <Statistics></Statistics>
      },
      {
        path: '/details/:id',
        loader: ()=> fetch('/public/data.json'),
        element: <DonationDetails></DonationDetails>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
