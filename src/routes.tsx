import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Components/auth/PrivateRouter';
import AddProduct from './Screens/AddProduct';
import AllProducts from './Screens/AllProducts';
import Home from './Screens/Home';
import Login from './Screens/Login/index';
import Products from './Screens/Products';
import Register from './Screens/Register';
import Index from './Screens/Index';
const RouterFile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path="/login" element={<Login />}/>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<PrivateRoute children={<Home/>}/>}></Route>
        <Route path='/products' element={<PrivateRoute children={<Products/>}/>}></Route>
        <Route path='/addproduct' element={<PrivateRoute children={<AddProduct/>}/>}></Route>
        <Route path='/allproducts' element={<PrivateRoute children={<AllProducts/>}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterFile;