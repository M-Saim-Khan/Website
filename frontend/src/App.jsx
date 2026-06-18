import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProductList from "./pages/ProductList"
import Register from "./pages/Register"
import Products from "./pages/Products"
import ProtectedRoute from "./components/ProtectedRoute"
import { useParams } from "react-router";

function Logout(){
  localStorage.clear()
  return <Navigate to = "/login/" />
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path = "/Cart"
            element = {
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
            />
            <Route path = "/" element = {<Home />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/register" element = {<RegisterAndLogout />}/>
            <Route path = "/logout" element = {<Logout />} />
            <Route path = "/products/:id" element = {<Products />} />
            <Route path="/category/:id" element={<ProductList />} />
            <Route path = "*" element = {<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
