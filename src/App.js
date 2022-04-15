import { createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import useCart from './hooks/useCart'
import useFood from './hooks/useFood'
import Cart from './Pages/Cart/Cart'
import BreakFast from './Pages/Home/BreakFast/BreakFast'
import Dinner from './Pages/Home/Dinner/Dinner'
import FoodDetails from './Pages/Home/FoodDetails/FoodDetails'
import Home from './Pages/Home/Home'
import Lunch from './Pages/Home/Lunch/Lunch'
import Login from './Pages/Login/Login/Login'
import SignUp from './Pages/Login/SignUp/SignUp'
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'
export const CartContext = createContext()

function App() {
    const [foods] = useFood()
    const { cart, setCart } = useCart(foods)

    return (
        <div>
            <CartContext.Provider value={{ cart, setCart }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<BreakFast />} />
                        <Route path="breakfast" element={<BreakFast />} />
                        <Route path="lunch" element={<Lunch />} />
                        <Route path="dinner" element={<Dinner />} />
                    </Route>
                    <Route path="/food-deatils/:id" element={<FoodDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </CartContext.Provider>
        </div>
    )
}

export default App
