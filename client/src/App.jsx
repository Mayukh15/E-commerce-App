import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import Authlogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import Adminlayout from "./components/admin-view/layout";

function App() {
  return (
    <>
      <h1>Header Component</h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Authlogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<Adminlayout/>}>

        </Route>
      </Routes>
    </>
  );
}

export default App;
