import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Common/Navbar/Navbar';
import Home from './Pages/Home/Home';
import WomenFashion from './Pages/WomenFashion/WomenFashion';
import Footer from './Components/Common/Footer/Footer';
import MensFashion from './Pages/MensFashion/MensFashion';
import { DataProvider } from './Components/Context/Context';
import AddDetails from './Components/AddDetails/AddDetails';
import Details from './Pages/Details/Details';
import SaveAddress from './Components/SavedAddress/SaveAddress';
import PreviousOrder from './Pages/PreviousOrder/PreviousOrder';
import FAQ from './Pages/FAQ/FAQ';

function App() {
  // document.body.style.overflow='auto';
  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/women-fashion' element={<WomenFashion />} />
          <Route path='/mens-fashion' element={<MensFashion />} />
          <Route path="/add-details" element={<AddDetails/>}/>
          <Route path="/details/:Id" element={<Details/>}/>
          <Route path="/address" element={<SaveAddress/>}/>
          <Route path="/previous_order" element={<PreviousOrder/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
        </Routes>
        <br />
        <hr />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
