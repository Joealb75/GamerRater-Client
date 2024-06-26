import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login.jsx"
import { Register } from '../pages/Register.jsx'
import { Authorized } from "./Authorized"
import Home from "../pages/Home"
import { GamesList } from "./Games.jsx"

export const ApplicationViews = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<Authorized />}>
                    <Route path ="/" element={<Home />} />
                    <Route path="/games" element={<GamesList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}