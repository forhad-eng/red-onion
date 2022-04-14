import { Route, Routes } from 'react-router-dom'
import BreakFast from './Pages/Home/BreakFast/BreakFast'
import Home from './Pages/Home/Home'
import Header from './Pages/Shared/Header/Header'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="breakfast" element={<BreakFast />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
