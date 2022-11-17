
import {Routes,Route} from 'react-router-dom'
import AboutPage from './components/ReactRouter/AboutPage';
import FeaturedProducts from './components/ReactRouter/FeaturedProducts';
import HomePage from './components/ReactRouter/HomePage';
import { Navbar } from './components/ReactRouter/Navbar';
import { ProductAdded } from './components/ReactRouter/NavigateOfAdded';
import NewProducts from './components/ReactRouter/NewProducts';
import NoMatch from './components/ReactRouter/NoMatch';
import Products from './components/ReactRouter/Products';
function App() {
  return (
    <>  
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="Product-Add" element={<ProductAdded/>}></Route>
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        {/* use this route for any incorrect routes */}
        <Route path="*" element= {<NoMatch/>}/>
      </Routes>
    </>
  );
}

export default App;
