import { Route, Routes } from 'react-router-dom'
import BreakFast from './Pages/Home/BreakFast/BreakFast'
import Home from './Pages/Home/Home'
import Lunch from './Pages/Home/Lunch/Lunch'
import Header from './Pages/Shared/Header/Header'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="breakfast" element={<BreakFast />} />
                    <Route path="lunch" element={<Lunch />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
