import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import DefaultLayout from "./Layouts/DefaultLayout";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Route>
        </Routes>
    )
}