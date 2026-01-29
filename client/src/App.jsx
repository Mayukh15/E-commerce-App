import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import Authlogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import Adminlayout from "./components/admin-view/layout";
import AdminDashBoard from "./pages/admin-view/dashboard";
import AdminFeatures from "./pages/admin-view/features";
import AdminOrders from "./pages/admin-view/orders";
import AdminProducts from "./pages/admin-view/products";
import Shoppinglayout from "./components/shopping-view/layout";
import Notfound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listings";
import ShoppingCheckOut from "./pages/shopping-view/check-out";
import ShoppingAccount from "./pages/shopping-view/accounts";
import CheckAuth from "./components/common/check-auth";
import UnAuthPage from "./pages/unauth-page";

function App() {
  const isAuthenicated=false;
  const user=null;
   
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenicated={isAuthenicated} user={user}>
            <AuthLayout/>
          </CheckAuth>
        }>
          <Route path="login" element={<Authlogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={
          <CheckAuth isAuthenicated={isAuthenicated} user={user}>
            <Adminlayout/>
          </CheckAuth>
        }>
         <Route path="dashboard" element={<AdminDashBoard/>}/>
         <Route path="features" element={<AdminFeatures/>}/>
         <Route path="orders" element={<AdminOrders/>}/>
         <Route path="products" element={<AdminProducts/>}/>
        </Route>
        <Route path="/shop" element={
          <CheckAuth isAuthenicated={isAuthenicated} user={user}>
            <Shoppinglayout/>
          </CheckAuth>
        }>
          <Route path="home" element={<ShoppingHome/>}/>
          <Route path="listing" element={<ShoppingListing/>}/>
          <Route path="checkout" element={<ShoppingCheckOut/>}/>
          <Route path="accounts" element={<ShoppingAccount/>}/>
          
        </Route>
        <Route path="*" element={<Notfound/>}/>
        <Route path="/unauth-page" element={<UnAuthPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
