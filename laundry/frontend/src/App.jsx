import About from './components/About/About'
import Header from './components/Header/Header'
import Services from './components/Service/Services'
import WashService from './components/Service/WashService'
import ContactPage from './components/Contacts/ContactPage'
import Footer from './components/Footer/Footer'
import NavBar from './components/Header/NavBar'
import Error from './components/Error/Error'
import Login from "./components/Auth/Login";
import AdminSidebar from "./components/Admin/sidebar/AdminSidebar";
import AdminHeader from "./components/Admin/Header/AdminHeader";
import ReviewRating from "./components/Static_Content/ReviewRating";
import Options from "./components/Static_Content/Options";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from './components/Dashboard/Order'
import "./asset/js/custom"
import Cart from './components/Dashboard/Cart';
import Work from './components/Static_Content/Work'
import ScrollToTop from '../src/components/ScrollToTop'



function App() {

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={
            <>
              <NavBar />
              <Header />
              <Services />
              <About />
              <Work />
              <Options />
              <ReviewRating />
              <ContactPage />
              <Footer />
            </>
          } />

          <Route path='/about' element={
            <>
              <NavBar />
              <About />
              <Footer />
            </>
          } />


          <Route path='/service' element={
            <>
              <NavBar />
              <Services />
              <Footer />
            </>
          } />

          <Route path='/wash-service' element={
            <>
              <NavBar />
              <WashService />
              <Footer />
            </>
          } />

          <Route path='/cart-and-shipment' element={
            <>
              <NavBar />
              <Cart />
              <Footer />
            </>
          } />


          <Route path='/contact' element={
            <>
              <NavBar />
              <ContactPage />
              <Footer />
            </>
          } />
          <Route path='/dashboard' element={
            <>
              <NavBar />
              <Order />
              <Footer />
            </>
          } />

          {/* admin  */}


          <Route path='/admin/dashboard' element={
            <>
              <AdminSidebar />
              <AdminHeader />
            </>
          } />

          <Route path='/admin/orders' element={
            <>
              <AdminSidebar />
              <AdminHeader />
            </>
          } />


          <Route path='/admin/users' element={
            <>
              <AdminSidebar />
              <AdminHeader />
            </>
          } />

          <Route path='/admin/support' element={
            <>
              <AdminSidebar />
              <AdminHeader />
            </>
          } />


          <Route path='/login' element={<>
            <Login />
          </>} />
          <Route path='*' element={
            <>
              <NavBar />
              <Error />
              <Footer />
            </>
          } />

        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App
