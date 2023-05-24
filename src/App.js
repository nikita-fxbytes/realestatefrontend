import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/header/Header';
import TopHeader from './components/layout/TopHeader';
import { lazy, Suspense, useContext, useEffect } from 'react';
import AuthContext from './helper/auth/AuthContext';
import { getUserToken } from './helper/CommonFunction';
import NotFound from './page/notfound/NotFound';
import withAuth from './helper/middleware/withAuth';
import CustomerProfile from './page/auth/customerprofile/CustomerProfile';
// Lazy loading
const LogIn = lazy(() => import('./page/auth/login/LogIn'));
const Register = lazy(()=>import('./page/auth/register/Register'));

const Home = lazy(()=>import('./page/home/Home'));
const About = lazy(()=>import('./page/about/About'));
const AllProperties = lazy(()=>import('./page/properties/AllProperties'));
const PropertyDetails = lazy(()=>import('./page/propertydetails/PropertyDetails'));
// with login
const AuthProfile = lazy(() => import('./page/auth/customerprofile/profile/Profile').then(module => ({ default: withAuth(module.default) })));
const AuthChangePassword = lazy(() => import('./page/auth/customerprofile/changepassword/ChangePassword').then(module => ({ default: withAuth(module.default) })));


function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  useEffect(()=>{
    checkIsLoggedIn();
  },[]);
  // Check login
  const checkIsLoggedIn=() =>{
    const token = getUserToken();
    if(token){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  }
  return (
    <>
      <ToastContainer />
      <Router>
        <TopHeader />
        <Header />
        <Routes>
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" />
              ) : (
                <Suspense fallback={<div>Loading...</div>}>
                  <LogIn/>
                </Suspense>
              )
            }
          />
          <Route
            path="/register"
            element={
              isLoggedIn ? (
                <Navigate to="/" />
              ) : (
                <Suspense fallback={<div>Loading...</div>}>
                  <Register/>
                </Suspense>
              )
            }
          />
          <Route exact 
            path="/" 
            element={ 
              <Suspense fallback={<div>Loading...</div>}>
                <Home/>
              </Suspense>
            } 
          />
          <Route exact 
            path="/about" 
            element={ 
              <Suspense fallback={<div>Loading...</div>}>
                <About/>
              </Suspense>
            }
          />
          <Route exact 
            path="/properties" 
            element={ 
              <Suspense fallback={<div>Loading...</div>}>
                <AllProperties/>
              </Suspense>
            } 
          />
          <Route exact 
            path="/details/:slug" 
            element={ 
              <Suspense fallback={<div>Loading...</div>}>
                <PropertyDetails/>
              </Suspense>
            }
          />
          {/* with login */}
          <Route 
            path="/profile" 
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <CustomerProfile Component={AuthProfile} pageName="Profile"/>
              </Suspense>
            } 
          />
          <Route 
            path="/change-password" 
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <CustomerProfile Component={AuthChangePassword} pageName="Change password"/>
              </Suspense>
            } 
          />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;