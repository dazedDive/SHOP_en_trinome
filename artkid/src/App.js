import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/Home.screen';
import CollectionScreen from './screens/Collection.screen';
import ArtistsScreen from './screens/Artists.screen';
import TopScreen from './screens/Top.screen';
import CartScreen from './screens/Cart.screen';
import AdminScreen from './screens/Admin.screen';

function App() {
  return (
    <>
      <BrowserRouter className="App">

        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/collection' element={<CollectionScreen />} />
          <Route path='/artists' element={<ArtistsScreen />} />
          <Route path='/top' element={<TopScreen />} />
          <Route path='/cart' element={<CartScreen />} />
          <Route path='/admin' element={<AdminScreen />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>

      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>
      <script>var Alert = ReactBootstrap.Alert;</script>
    </>
  );
}

export default App;
