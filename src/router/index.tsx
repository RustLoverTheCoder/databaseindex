import {Routes, Route} from "solid-app-router"
import {lazy} from 'solid-js'

const Home = lazy(() => import("../pages/index"))

export default function App() {
    return <>
        <Routes>
            <Route path="/" component={Home}/>
        </Routes>
    </>
}