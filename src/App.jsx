import React from "react";
import { Cart,  Home, Login, ProductDetail, Register, NewProduct, NotFound404} from "./Pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./Context";
import EditProduct from "./Pages/EditProduct/EditProduct";

function App() {
  const router = createBrowserRouter ([
    {path:"/", element:<Home />},
    {path:"/login", element:<Login/>},
    {path:"/cart", element:<Cart />},
    {path:"/register", element:<Register />},
    {path:"/product/detail/:pid", element:<ProductDetail />},
    {path: "/product/new", element: <NewProduct/>},
    {path: "/product/edit/:pid", element: <EditProduct/>},
    {path:'*', element:<NotFound404/>}
  ])
  return (
    <CartContextProvider>
      <RouterProvider router = {router}/>
    </CartContextProvider>
  );
}

export default App;