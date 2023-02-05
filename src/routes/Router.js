import About from '../views/Templates/About';
import Curvas from '../views/Templates/Curvas';
import Home from '../views/Templates/Home';

export const Router = [
    {
        path: '/',
        element: Home(),
    },
    {
        path: '/curvas',
        element: Curvas(),
    },
    {
        path: '/about',
        element: About(),
    },
]