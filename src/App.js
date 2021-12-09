import Navbar from "./components/Navbar";
import ProductList from "./components/shopping/ProductList";
import {ContextProvider} from './context/Context';
import {Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <div className="font-serif">
      <ContextProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
