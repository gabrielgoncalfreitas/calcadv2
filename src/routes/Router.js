import Reducoes from '../views/Templates/Reducoes';
import Curvas from '../views/Templates/Curvas';
import Home from '../views/Templates/Home';
import Te from '../views/Templates/Te';
import { Routes } from './Routes';

export const Router = [
    {
        path: Routes.home.path,
        title: Routes.home.title,
        element: Home(),
    },
    {
        path: Routes.curvas.path,
        title: Routes.curvas.path,
        element: Curvas(),
    },
    {
        path: Routes.reducoes.path,
        title: Routes.reducoes.path,
        element: Reducoes(),
    },
    {
        path: Routes.te.path,
        title: Routes.te.path,
        element: Te(),
    },
]