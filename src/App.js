import Navbar from "./components/Navbar";
import ProductList from "./components/shopping/ProductList";
import {ContextProvider} from './context/Context';
import {Route, Routes} from 'react-router-dom';
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
function App() {
  
  return (
    <div className="font-serif">
      <ContextProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/' element={<ProductList/>}/>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
