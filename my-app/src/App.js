import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import FavoriteList from './components/FavoriteList/FavoriteList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite_list" element={<FavoriteList />}></Route>
      </Routes>
    </>
  );
}

export default App;
// almost done
