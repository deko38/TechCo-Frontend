import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Features from "./pages/Features.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";


createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/features" element={<Features/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/cart" element={<Cart/>}/>

                {/*<Route path="/products/:id" element={<ProductDetails/>}/>*/}
                {/*<Route path="/products/:category" element={<Products />} />*/}
                {/*<Route path="/wishlist" element={<Wishlistpage/>}/>*/}
                {/*<Route path="/shipping" element={<Shipping/>}/>*/}
                {/*<Route path="/payment" element={<Payment/>}/>*/}
                {/*<Route path="/final" element={<FinalPage />} />*/}
                {/*<Route path="/searchresults/:searchTerm" element={<SearchResults />} />*/}
                {/*<Route path="/*" element={<Error />} />*/}
            </Routes>
        </BrowserRouter>

)
