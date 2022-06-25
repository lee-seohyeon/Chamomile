import { Routes, Route, BrowserRouter,} from 'react-router-dom';
import Home from './home/Home';
import Searchwindow from './search/Searchwindow';
function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/search" exact element={<Searchwindow/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
