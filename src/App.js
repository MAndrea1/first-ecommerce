import Navbar from "./components/Navbar";
import ProductList from "./components/shopping/ProductList";
import {Context, ContextProvider} from './context/Context';
import {Route, Routes} from 'react-router-dom';
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useContext } from "react/cjs/react.development";

function App() {
  const auth = getAuth();
  const fbuser = auth.currentUser;
  const {setusername} = useContext(Context)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setusername(user.displayName)
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])
  
  return (
    <div className="font-serif">
        <Navbar></Navbar>
        <Routes>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/' element={<ProductList/>}/>
        </Routes>
    </div>
  );
}

export default App;
