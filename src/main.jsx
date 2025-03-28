import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import CreateProduct from "./pages/CreateProduct.jsx";
import SignIn from "./pages/Signin.jsx";
import SignUp from "./pages/Signup.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import UserProvider from "./Provider/UserProvider.jsx";
import { Provider } from 'react-redux'
import { store } from "./store/store.js";
import Cart from "../src/pages/Cart.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <UserProvider> */}
<Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
       <Route path="/products" element={<App />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/items/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        {/* nested routes */}
        <Route path="user">
          <Route index element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* </UserProvider> */}
    </Provider>
  </StrictMode>
);
