import {Routes, useRoutes} from "solid-app-router"
import {lazy} from 'solid-js'

const routes = [
    {
        path: "/",
        component: lazy(() => import("../layouts/index")),
        children: [
            {path: "/", component: lazy(() => import("../pages/index"))},
        ]
    },
]

export default function App() {
    const Routes = useRoutes(routes);
    return <Routes/>
}