import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header';
import MyCart from './pages/MyCart';
import MyOrder from './pages/MyOrder';
import Products from './pages/Products';
import Details from './pages/Details';
import HomePage from './components/HomePage';


const PRODUCTS = [
  {
    id:1,
    title:"MacBook Pro"
  },
  {
    id:2,
    title:"MacBook Pro Air"
  },
  {
    id:3,
    title:"ASUS TUF Gaming"
  },
  {
    id:4,
    title:"Huawei MateBook D"
  },
]

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/products' element={<Products PRODUCTS={PRODUCTS}/>}/>
        <Route path='/welcome' element={<HomePage/>}/>
        <Route path='/products/:id/details' element={<Details products={PRODUCTS}/>}/>
        <Route path='/myCart' element={<MyCart/>}/>
        <Route path='/myOrder' element={<MyOrder/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
