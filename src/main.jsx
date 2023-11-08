import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/style.css'


import App from './app';
import Landing from './pages/Landing.jsx';
import TheMan from './pages/TheMan.jsx';
import TheWork from './pages/TheWork.jsx';
import YouNeed from './pages/YouNeed.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: '/TheMan',
                element: <TheMan />,
            },
            {
                path: '/TheWork',
                element: <TheWork />,
            },
            {
                path: '/YouNeed',
                element: <YouNeed />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
