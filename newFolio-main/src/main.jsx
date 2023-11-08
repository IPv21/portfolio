import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Landing from './pages/Landing';
import TheMan from './pages/TheMan';
import TheWork from './pages/TheWork';
import YouNeed from './pages/YouNeed';

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
                path: '/man',
                element: <TheMan />,
            },
            {
                path: '/work',
                element: <TheWork />,
            },
            {
                path: '/need',
                element: <YouNeed />,
            },
        ],
    },
]) ;

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);