import {Routes, Route} from "solid-app-router"
import {lazy} from 'solid-js'

const Layout = lazy(() => import('../layouts/index'))
const Home = lazy(() => import("../pages/index"))
const Setting = lazy(() => import('../pages/Setting'))
const Create = lazy(() => import('../pages/Create'))

export default function App() {
    return <>
        <Routes>
            <Route path="/" component={Layout}>
                <Route path='/' component={Home}/>
                <Route path="/setting" component={Setting}/>
                <Route path="/create" component={Create}/>
            </Route>
        </Routes>
    </>
}