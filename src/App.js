import "./styles/app.scss";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/contact";
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import PaymentSuccess from "./components/cart/PaymentSucess";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Orders from "./components/admin/Orders";
import Users from "./components/admin/Users";
import About from "./components/about/About";
import NotFound from "./components/layout/NotFound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";

// Styles Import
import "./styles/app.scss";
import "./styles/Header.scss";
import "./styles/home.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/payment.scss";
import "./styles/confirmOrder.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/about.scss";
import "./styles/dashboard.scss";
import "./styles/orderdetails.scss";
// end of styles import

function App() {
  const dispatch = useDispatch();

  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);

  return (
    <Router>
      <Header isAuthenthicated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />

        <Route
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me" />
          }
        >
          <Route path="/login" element={<Login />} />
        </Route>
        {/* <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenthicated={!isAuthenticated} redirect="/me">
              <Login />
            </ProtectedRoute>
          }
        /> */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/me" element={<Profile />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/confirmOrder" element={<ConfirmOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Route>

        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user && user.role === true}
              redirectAdmin="/me"
            />
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
