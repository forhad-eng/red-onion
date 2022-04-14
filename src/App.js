import { Route, Routes } from 'react-router-dom'
import BreakFast from './Pages/Home/BreakFast/BreakFast'
import Dinner from './Pages/Home/Dinner/Dinner'
import FoodDetails from './Pages/Home/FoodDetails/FoodDetails'
import Home from './Pages/Home/Home'
import Lunch from './Pages/Home/Lunch/Lunch'
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<BreakFast />} />
                    <Route path="breakfast" element={<BreakFast />} />
                    <Route path="lunch" element={<Lunch />} />
                    <Route path="dinner" element={<Dinner />} />
                </Route>
                <Route path="/food-deatils/:id" element={<FoodDetails />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
