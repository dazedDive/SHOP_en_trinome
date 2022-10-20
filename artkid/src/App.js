import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import BaseScreen from './pages/BaseScreen';
import BaseScreenAdmin from './pages/BaseScreenAdmin';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Collections from './pages/Collections';
import DrawingList from './pages/DrawingList';
import AccountBoard from './pages/AccountBoard';
import ArtistDetail from './pages/ArtistDetail';
import CollectionDetail from './pages/CollectionDetail';
import TopDrawings from './pages/TopDrawings';
import HomeAdmin from './pages/HomeAdmin';
import MyCart from './pages/MyCart';
import Error404 from './pages/Error404';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<BaseScreen/>}>
        <Route path="/" element ={<Home/>}/>
          <Route path="/artists" element ={<Artists/>}/>
          <Route path="/artists/:id" element ={<ArtistDetail/>}/>
          <Route path="/collections" element ={<Collections/>}/>
          <Route path="/collections/:id" element ={<CollectionDetail/>}/>
          <Route path="/drawinglist" element ={<DrawingList/>}/>
          <Route path="/top" element ={<TopDrawings/>}/>
          <Route path="/account" element ={<AccountBoard/>}/>
          <Route path="/mycart" element ={<MyCart/>}/>
          <Route path="/*" element ={<Error404/>}/>
        </Route>

        <Route path="/admin" element={<BaseScreenAdmin/>}>
           <Route path="/admin" element ={<HomeAdmin/>}/>      
        </Route>
      </Routes>
    </div>
  );
}

export default App;
